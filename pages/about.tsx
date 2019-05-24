import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import {makeCMSEntryRequest} from '../services/CMSrequest';

const About = (data: any) => {
    const {aboutPageTitle,aboutPageImage,aboutPageText} = data

    return(
        data && 
        <div>
            <NavBar/>
                <h2>
                    {aboutPageTitle}
                </h2>
                <div>
                    <img src = {aboutPageImage.fields.file.url}/>
                </div>
                <p>
                    {aboutPageText}
                </p>  
        </div>
    )
}

About.getInitialProps = async() => {
    const data = await makeCMSEntryRequest('2XFjJ40DoLno1olFIeSA78');
    return data.fields;
}

export default About