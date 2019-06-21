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
  console.log(tag)
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  console.log(x)
  if (tag == "all") tag = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(tag) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element:any, name:string) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element:any, name:string) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }