import { useState } from "react";
const About=()=>{
    var[text,setText]=useState("hello")
    return(
        <div>
            <h2>This is About Component.</h2>
            <h2>TextArea</h2>
            <textarea value={text}/>
            <textarea value={text} onChange={()=>setText()}/>
            <textarea value={text} onChange={(event)=>setText(event.target.value)}/>
            <p>text is {text}</p>
        </div>
    )
}
export default About;