import Button from "./Button";
import trackingButtonComponent from "./TrackingButtonComponent";
const HoC=()=>{
    const ButtonWithTracking=trackingButtonComponent(Button);
return(
    <div>
        <h2>this is the example of higher order components</h2>
        
        <ButtonWithTracking name="Login" trackingInfo={{customerId:"122345566",password:"sece@2323"}}/>
    </div>
);
};
export default HoC;