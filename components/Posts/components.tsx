import styled from '@emotion/styled';

export const PostContainer = styled.div`
    margin: 20px;
    cursor: pointer;
    flex: 0 1 calc(30% - 1em);
    border: 1px solid #efefef;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:after{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        opacity: 0;
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &:hover{
        -webkit-transform: scale(1.10, 1.10);
        transform: scale(1.10, 1.10);
        &:after{
            opacity: 1;
        }
    }
`

export const PostImageContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 200px;
`

export const PostImage = styled.img`
    width: 100%;
`
export const PostDescription=styled.div`
    font-family: "Roboto", Arial, sans-serif;
    padding: 20px;
    `
export const PostTitle = styled.h2`
    font-weight: 700;
    font-size: 28px;
    margin: 0 0 20px 0;
    text-align: left;
    &:hover{
        text-decoration: underline;

    }
`
export const PostDate = styled.h3`
    text-align: center;
    font-family: 'Inconsolata';
`
export const PostGridContainer=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const PostGridTitle=styled.h2`
    padding-top: 10px;
`

