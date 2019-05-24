import NavBar from '../components/NavBar/NavBar';
import React,{useState,useEffect} from 'react';
import {makeCMSEntryRequest} from '../services/CMSrequest';
// import contentful from 'contentful';
const contentful = require('contentful')

const About = (data) => {
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