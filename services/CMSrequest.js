const contentful = require('contentful')

const client = contentful.createClient({
    space: '7nio64lc6xum',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '2BRt1UfcIexpHhwfkP98K0ydPgIB8vATWysOcDrOI78'
    })

export const makeCMSEntryRequest = async(entryID) => {
    
    try{
        const entry = await client.getEntry(entryID);
        return entry;
    }catch(error){
        console.error(error);
    };
    // .then((entry) => {
    //     // console.log(entry);
    //     // console.log(entry.fields.blogTitle)
    //     return entry;
    // })
    // .catch(console.error)
    

}

