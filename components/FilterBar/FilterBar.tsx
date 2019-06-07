import {allTags} from '../Posts/PostCard';

export const FilterBar =()=>{
    var tagArr = Array.from(allTags);
    return(
        <div>
            {tagArr && tagArr.map((tag:string)=><button key={tag}>{tag}</button>)}
        </div>
    )   
}

const doSomething =()=>{
    console.log("something!")
}