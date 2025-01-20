//ES6-Echma script standard 6
//variable declaration
var a=10; //redeclare and reassign possible
let b=20; //redeclare not possible
const c=30; //redeclare and reassign not possible
//scope
console.log(a)
console.log(b);
{
    var a=20;
    let b=30;
    console.log(a);
    console.log(b);
}
console.log(a)
console.log(b)
//class and objects
class ClassEg{
    constructor(){
    this.a=10;//this->to indicate which constructor is called 
}
//arrow function
funInClass=()=>{return(obj.a)};
}
obj=new ClassEg()
console.log(obj.a);
console.log(obj.funInClass());
//ternary operator
console.log((a%2==0)?"Even":"Odd")
//spread operator
a=[10,20,30,40]
b=[50,60,70]
c=[...b,a]
console.log(c);
//rest operator
function restOpEg(a,b,...arg){
    console.log(a)
    console.log(b)
console.log(arg)
}
restOpEg(10,20,30,40,50)
//destructing operator
var array=[10,20,30]
var [w,x,y,z]=[10,20,30]
console.log(w,x,y,z)
//hoisting
console.log(a)
var a=10;
//func hoisting
console.group(fun())
function fun(){
    return 10
}