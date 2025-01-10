function submitform(submit,isformvalid){
if(isformvalid){
    console.log("Fields vaidated successfully.");
    console.log(submit);
}
else{
    console.log("Form validation fail");
    console.log("Form submission unsccessfull");
}
}
function formvalidation (){
    email="sece@sece.ac.in"
    password="1234567"
    if (email==="sece@sece.ac.in" && password){
        return true
    }
    else{
        return false
    }
}