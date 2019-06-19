import styled from '@emotion/styled';

export const NavBarItemContainer = styled.div`
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  display: inline-block;
  transition: all .4s;
  text-align: center;
`

export const FullNavBarContainer=styled.div`
    width: 100vw;
    height: 200px;
    display: relative;
    border-bottom: 1px solid #e6e6e6;
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
    padding: 25px;
    margin: 0px;
    cursor: pointer;
`
export const NavBarItemText = styled.a`
transition: .3s all ease;
  &:hover{
    color: rgba(0, 0, 0, 0.5);
    transition: .3s all ease;
  }
`