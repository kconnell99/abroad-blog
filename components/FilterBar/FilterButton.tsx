import { FilterBar } from "./FilterBar";

export const FilterButton = () =>{
    return(
        <div>
            <button onClick={()=>showFilterBar()}>Filter</button>
            <FilterBar></FilterBar>
        </div>
    )
}

const showFilterBar=()=>{
    return(
        <>
            <h1>Yuh</h1>
        </>
    )
}