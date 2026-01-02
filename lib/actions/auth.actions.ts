'use server';

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({email,password,fullName, country, investmentGoals, riskTolerance, preferredIndustry}: SignUpFormData) => {
    try
    {
        const response= await auth.api.signUpEmail({
            body:{
                email: email,
                password: password,
                name: fullName
            }
        })
        if(response)
        {
            await inngest.send({
                name: 'app/user.created',
                data:{
                    email,
                    country: country,
                    investmentGoals: investmentGoals,
                    riskTolerance: riskTolerance,
                    preferredIndustry: preferredIndustry
                }
            });
        }
        return {success: true, data: response};
    }
    catch(e)
    {
        return {success: false, message: 'Error during sign up.'};
    }
}

export const signInWithEmail = async ({email,password}: SignInFormData) => {
    try
    {
        const response= await auth.api.signInEmail({
            body:{
                email: email,
                password: password,
            }
        })
        return {success: true, data: response};
    }
    catch(e)
    {
        return {success: false, message: 'Error during sign in.'};
    }
}

export const signOut = async () => {
    try{
        await auth.api.signOut({headers:await headers()});
    } catch (error) {
        console.error("Error signing out:", error);
    }
};