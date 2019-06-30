import styled from '@emotion/styled';

export const FilterContainer=styled.ul`
  transition: visibility 0s, opacity 0.5s linear;
  padding: 0;
  display: flex;
  margin: 0;
`

export const FilterItemButton=styled.button`
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  &:focus{
    background-color: yellow;
    outline: 0;
  }
`
export const FilterBarButton=styled.button`
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    display: block;
    outline: 0;
`