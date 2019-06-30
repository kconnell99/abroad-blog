import React,{useRef} from "react";

export const ModalPopup = (body) =>{
    var background = useRef(body);
    return(
        <>
        <form action="mailto:ktconnell99@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailTestForm">
            Your Name:<br></br>
              <input type="text" name="VisitorName"></input>
              <br></br>
              Your Comment:
              <br></br>
              <textarea name="VisitorComment">
              </textarea>
              <input type="submit" value="Email This Form"></input>
          </form>
        </>
    )
}

