import { inngest } from "@/lib/inngest/client"
import { sendSignUpEMail } from "@/lib/inngest/functions"
import { serve } from "inngest/next"
//we are exposing inngest functions using the NEXTJS APi route
//making these functions callable

export const {GET, POST, PUT} = serve({
    client: inngest,
    functions :[sendSignUpEMail],
})

