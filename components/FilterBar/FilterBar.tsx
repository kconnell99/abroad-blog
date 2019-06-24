import {allTags} from '../Posts/PostCard';

export const FilterBar =()=>{
    var tagArr = Array.from(allTags);
    return(
        <div>
            {tagArr && tagArr.map((tag:string)=><button onClick={()=>filterSelection(tag)} key={tag}>{tag}</button>)}
        </div>
    )   
}

function filterSelection(tag: string) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  for(i=0;i<x.length;i++){
    if(!x[i].classList.contains(tag)){
      x[i].setAttribute("style","display: none")
    }
    else{
      x[i].setAttribute("style","display: block")
    }
    if(tag=="all"){
      x[i].setAttribute("style","display: block")
    }
  }
}
