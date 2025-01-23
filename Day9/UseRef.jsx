import { useEffect, useRef, useState } from "react";

const UseRef=()=>{
var[text,setText]=useState("hell ");
var prevRender=useRef();
useEffect(()=>{
    console.log(prevRender.current)
    prevRender.current=text
},[text])

    return(        <div>
            <h2>This page is meant for useRef hook</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <h4> the text is {text}</h4>
            <h5> the previous render text is {prevRender.current}</h5>
        </div>)
    
}
export default UseRef;