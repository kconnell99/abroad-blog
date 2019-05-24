

const About = () => {

    const contentful = require('contentful')

    const client = contentful.createClient({
    space: '7nio64lc6xum',
    environment: '<environment_id>', // defaults to 'master' if not set
    accessToken: '2BRt1UfcIexpHhwfkP98K0ydPgIB8vATWysOcDrOI78'
    })

    client.getContentType('landingPage')
.then((contentType) => console.log(contentType))
.catch(console.error)

    return(
        <div>
            This is the about page.
        </div>
    )
}
export default About