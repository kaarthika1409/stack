const express = require('express')
const path=require('path')
const mdb=require('mongoose')
const dotenv=require('dotenv')
const Signup=require("./models/signupSchema")
const Login=require("./models/loginSchema")
dotenv.config()
const app = express()
app.use(express.json())
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connection Successful")
}).catch((err)=>{
    console.log("MongoDB Connection Unsuccessful", err)
})
app.get('/', (req, res) => {
    res.send("Welcome to backend my friend\n Your Roller coster starts from now on\n Fasten your codebase so you can catchup what is been taught")
})
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
});
app.post('/signup',(req,res)=>{
var{firstName,lastName,username,email,password}=req.body
try{
    const newSignup=new Signup({
    firstName:firstName,
    lastName:lastName,
    username:username,
    email:email,
    password:password
})
newSignup.save()
res.status(201).send("SignUp Successful")
}
catch(err) {
    res.status(400).send("SignUp Unsuccessful",err)
}
/*console.log(req.body)
console.log(firstName,lastName,userName,ElementInternals,password)
res.json("Values received");*/
})

app.post('/login',(req,res)=>{
    var{userName,password}=req.body
    try{
        const newLogin=new Login({
        username:username,
        password:password
    })
    newLogin.save()
    res.status(201).send("Login Successful")
    }
    catch(err) {
        res.status(400).send("Login Unsuccessful",err)
    }
    })

app.get('/getsignupdet',async(request,res)=>{
    varsignUpdet=await Signup.find()
    res.status(200).json(signUpdet)
})
//update user details
app.post("/updatedet", async (req, res) => {
    var updateRec = await Signup.findOneAndUpdate(
      { username: "kaarthika140905" },
      { $set: { username: "kaarthika14092005" } }
    );
    console.log(updateRec);
     updateRec.save();
    res.json("Record Updated");
  });
  
app.listen(3001, () => {
    console.log("Server Started");
})