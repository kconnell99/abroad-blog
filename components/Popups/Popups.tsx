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
  border: 5px solid white;
  max-width: 300px;
  max-height: 300px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -13.5%;
  margin-top: -15%;

`

export const PopupImageContent=styled.img`
  max-width: 100%;
  max-height: 100%;
`
