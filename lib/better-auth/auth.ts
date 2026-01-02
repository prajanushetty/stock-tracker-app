import {betterAuth} from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { Db } from "mongodb";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async ()=>{
    if(authInstance)
        return authInstance;

    const mongoose = await connectToDatabase();
    const db= mongoose.connection.db;

    if(!db)
        throw new Error("MongoDb connection not found")
    //setting up betterAuth so it will automatically handle the user collection creation in mongodb
    // it will also handle the sessions collection, manage the accounts using the OAuth
      
    authInstance= betterAuth({
        database: mongodbAdapter(db as Db),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword:{
            enabled:true,
            disableSignUp: false,
            requireEmailVerification: false,
            maxPasswordLength:120,
            autoSignIn:true
        },
        plugins: [nextCookies()],
    });
    return authInstance;
}

export const auth= await getAuth();

