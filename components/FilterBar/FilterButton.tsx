import { FilterBar } from "./FilterBar";
import { useState } from "react";
import styled from '@emotion/styled';


export const FilterButton = ({tags}:any) =>{

    const [isFilterBarShown, setIsFilterBarShown] = useState(false);

    const handleClick=()=>{
        setIsFilterBarShown(!isFilterBarShown);
    }

    return(
        <>
            <FilterButtonContainer onClick={()=>setIsFilterBarShown(!isFilterBarShown)}>Filter</FilterButtonContainer>   
                {
                    isFilterBarShown && <FilterBar id="filterBar"tags={tags}></FilterBar>
                }
        </> 
    )
}


const FilterButtonContainer=styled.button`
    display: block;
    margin-top: 5px;
`
