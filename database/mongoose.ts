import mongoose from 'mongoose'
const MONGODB_URI= process.env.MONGODB_URI;

declare global{
    var mongooseCache:{
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null
    }
}

//next-JS server action reruns the code for every change we make. To avoid creating new connection everyTime and use the same connection
let cached=global.mongooseCache;

//no cache for the first time
if(!cached)
{
    cached = global.mongooseCache = {conn:null, promise:null};
}

export const connectToDatabase= async()=>
{
    if(!MONGODB_URI)
        throw new Error('MONGODB_URI must be set within .env');
    
    //if connection exists returs it
    if(cached.conn)
    {
        return cached.conn;
    }

    //if connection is in pending state(), it will not create a new connection
    if(!cached.promise)
    {
        cached.promise=mongoose.connect(MONGODB_URI, {bufferCommands:false})
    }

    //it waits for the same connection
    try{
        cached.conn = await cached.promise;
        //and saves it in the cache
    }
    catch(err)
    {
        //if connection fails clear the cache so reconnection happens properly
        cached.promise=null;
        throw err;
    }
    console.log(`Connected to database ${process.env.NODE_ENV} ${MONGODB_URI}`);
    
}