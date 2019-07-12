import env from '../env'

const contentful = require('contentful')

const envVars = env.API_SPACE_KEY ? env : process.env;

export const client = contentful.createClient({
    space: envVars.API_SPACE_KEY,
    environment: 'master', // defaults to 'master' if not set
    accessToken: envVars.API_ACCESS_TOKEN
    })

export const makeCMSEntryRequest = async(entryID:any) => {
    try{
        const entry = await client.getEntry(entryID);
        return entry;
    }catch(error){
        console.error(error);
    };
}

export const makeCMSContentRequest = async(contentID:any)=>{
    try{
        const {items} = await client.getEntries({
            'content_type': contentID,
          });
          return items;
    }catch(error){
        console.error(error);
    };
}

