import styled from '@emotion/styled';


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
          {tagArr && tagArr.map((tag:string)=><li style={{listStyle:"none"}}><button onClick={()=>filterSelection(tag)} key={tag}>{tag}</button></li>)}
      </FilterContainer>
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


export const FilterContainer=styled.ul`
  transition: visibility 0s, opacity 0.5s linear;
  padding: 0;
  display: flex;
  margin: 0;
`