import {createClient} from "next-sanity" 

export  const client = createClient({
    projectId:`${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset:`${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion:"v2023-08-23",
    token:process.env.SANITY_ACCESS_TOKEN,
    useCdn:true,
})