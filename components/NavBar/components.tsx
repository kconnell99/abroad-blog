import styled from '@emotion/styled';

export const NavBarItemContainer = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  display: inline-block;
  transition: all .4s;
  text-align: center;
  &:hover{
    background: #bccbde;
  }
`

export const FullNavBarContainer=styled.div`
    background: #c2dde6;
    width: 100vw;
    height: 200px;
    display: relative;
`

export const NavBarItemsContainer = styled.div`
    width: 100%;
    padding: 25px;
    display: flex;
    float: bottom;
    flex-direction: row;
    justify-content: space-around;
`

export const NavBarTitle = styled.h1`
    text-align: center;
    color: white;
    padding: 25px;
    margin: 0px;
    cursor: pointer;
`