import { useState } from "react";
const Contact=()=>{
    var a= useState(10);
    var [num,setNum]=useState(0);
    return (<div>
        <h2>Welcome to Contact page</h2>
        <h3>This is a state example</h3>
        <h4>{a}</h4>
        <h4>{num}</h4>
        <button>+</button>
        <button onClick={()=>setNum(num+1)}>+</button>
        <button onClick={()=>setNum(num-1)}>-</button>
    </div>)
};
export default Contact;