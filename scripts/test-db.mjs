import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('ERROR: MONGODB_URI environment variable is not set.');
  console.error('Set it and re-run:  set MONGODB_URI=<your-uri> && node scripts/test-db.mjs');
  process.exit(1);
}

async function main() {
  try {
    console.log('Connecting to MongoDB...');
    // use a short connectTimeoutMS to fail fast in local tests
    await mongoose.connect(uri, {
      // recommended options
      // useNewUrlParser and useUnifiedTopology are not required in Mongoose 6+, but harmless
      connectTimeoutMS: 5000,
    });
    console.log('Connected to MongoDB successfully.');
    // show server info
    try {
      const admin = mongoose.connection.db.admin();
      const info = await admin.serverStatus();
      console.log('Server info:');
      console.log({ host: info.host, version: info.version });
    } catch (err) {
      // admin commands may be disabled on some managed providers; ignore
    }
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Failed to connect to MongoDB:');
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();
