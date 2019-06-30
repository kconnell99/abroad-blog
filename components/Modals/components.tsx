import styled from '@emotion/styled';


export const Modal = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
`
export const ModalClose = styled.div`
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    &:hover,&:focus{
        color: #bbb;
        text-decoration: none;
        cursor: pointer; 
    }
`
export const ModalContent = styled.img`
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;

`
export const ModalCaption = styled.div`
    animation-name: zoom;
    animation-duration: 0.6s;
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
`