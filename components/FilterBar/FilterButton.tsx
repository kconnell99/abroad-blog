import { FilterBar } from "./FilterBar";
import { useState } from "react";
import {FilterBarButton} from './components';


export const FilterButton = ({tags}:any) =>{

    const [isFilterBarShown, setIsFilterBarShown] = useState(false);

    const handleClick=()=>{
        setIsFilterBarShown(!isFilterBarShown);
    }

    return(
        <>
            <FilterBarButton onClick={handleClick}>Filter</FilterBarButton>   
                {
                    isFilterBarShown && <FilterBar tags={tags}></FilterBar>
                }
        </> 
    )
}
