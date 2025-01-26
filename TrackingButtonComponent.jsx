import { Component } from "react";

const trackingButtonComponent=(Component)=>{
return(props)=>{
    console.log("HoC tracking Comp");
    const handleClick=()=>{
        console.log("Logged In Fetch the Tracking Info",props.trackingInfo)
    }
    return(
        <div onClick={handleClick}>

CustomerId:<input type="text"/><br/>
        Password:<input type="text" />

            <Component {...props}/>
        </div>
    )
}
}
export default trackingButtonComponent;