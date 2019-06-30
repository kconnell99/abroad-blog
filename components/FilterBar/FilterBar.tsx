import {FilterContainer,FilterItemButton} from './components';

export const FilterBar =({tags}:any)=>{

  var allTags:Set<string>=new Set([]);

  const addAllTags=(tags:Array<any>)=>{
    tags.forEach(tag=>allTags.add(tag))
    allTags.add("all")
  }

  tags.data.map((tag:any)=>{addAllTags(tag.fields.postTags)})

  var tagArr = Array.from(allTags);
  return(
      <FilterContainer>
          {tagArr && tagArr.map((tag:string)=><FilterItemButton onClick={()=>{
            filterSelection(tag)
          }
            } key={tag}>{tag}</FilterItemButton>)}
      </FilterContainer>
  )   
}

const filterSelection=(tag: string)=>{

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

