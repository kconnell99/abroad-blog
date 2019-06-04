import env from '../env'

const contentful = require('contentful')

export const client = contentful.createClient({
    space: env.API_SPACE_KEY,
    environment: 'master', // defaults to 'master' if not set
    accessToken: env.API_ACCESS_TOKEN
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

