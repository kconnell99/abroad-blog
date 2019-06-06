import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import {makeCMSEntryRequest} from '../services/CMSrequest';
import {PhotoContainer, ImageContainer} from '../components/PhotoGrid/components';
import {PostBodyContainer,PostTitleContainer} from './post';


const About = (data: any) => {
    const {aboutPageTitle,aboutPageImage,aboutPageText} = data

    return(
        data && 
        <div>
            <NavBar/>
                <PostTitleContainer>
                    {aboutPageTitle}
                </PostTitleContainer>
                <PhotoContainer style={{
                    margin: "auto",
                    width: "50%",
                    cursor: "auto"
                }}>
                    <ImageContainer src = {aboutPageImage.fields.file.url}/>
                </PhotoContainer>
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