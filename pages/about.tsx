import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import {makeCMSEntryRequest} from '../services/CMSrequest';
import {PostHeader,PostHeaderImage,PostBodyContainer,PostTitleContainer} from '../components/Pages/components';

const About = (data: any) => {
    const {aboutPageTitle,aboutPageImage,aboutPageText} = data
    console.log(aboutPageTitle)
    return(
        data && 
        <div>
            <NavBar/>
            <PostHeader >
                <div style={{background: "linear-gradient(to bottom, #000000 70%, #e6e6e6 100%)"}}>
                    <PostHeaderImage src = {aboutPageImage.fields.file.url}/>
                </div>
                <PostTitleContainer>
                    {aboutPageTitle}
                </PostTitleContainer>
            </PostHeader>
                
                <PostBodyContainer style={{
                    marginLeft: "40%",
                    marginRight: "40%",
                    marginTop:"5%"
                }}>
                    {aboutPageText}
                </PostBodyContainer>  
        </div>
    )
}

About.getInitialProps = async() => {
    const data = await makeCMSEntryRequest('2XFjJ40DoLno1olFIeSA78');
    return data.fields;
}

export default About