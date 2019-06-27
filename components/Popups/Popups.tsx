import styled from '@emotion/styled';

export const PopupBackgroundContainer = styled.div` 
  position: fixed;
  width: 100%;  
  height: 100%;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  margin: auto;  
  background-color: rgba(0,0,0, 0.5);   
`
export const PopupTextContent=styled.div`
  text-align: center; 
  line-height: 12;
  background-color: white;
  position: fixed;
  width: 500px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -250px;
`
export const PopupImageContainer=styled.div`
  float: left;
  width: 100%;
  margin: 0;
  padding-bottom: 10px;
  background: white;
  display: contents;
`
export const PopupImageCaption=styled.p`

`
export const PopupImageContent=styled.img`
  object-fit: contain;
  height: 600px;
  width: 100%;
`
