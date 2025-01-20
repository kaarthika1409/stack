function promiseEg(flag){
    return new Promise(function(resolve,reject){
        if(flag===1){
            resolve("This is a promise resolve")
        }
        else if(flag===0){
            reject("This is a promise reject")
        }
        
    })
}
//console.log(promiseEg(0))
promiseEg(7).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})

//promise- location finder example
//pass2 things- Melboune,2000

locationFinder = (location,time)=>{
    return new Promise((locationFound,locationNotFound) =>{
        setTimeout(()=>{
            if(isLocationValid(location,time)){
                locationFound([location,"Found in",time,"millisecs"]);
            }
            else{
                locationNotFound([location,"Not Found in",time,"millisecs"]);
            }
        },time)
        
    })
    
}

function isLocationValid(loc,time){
    location = "melboune";
    t = 2000;
    if(loc === location && time <= t){
        return true;
    }
    else{
        return false;
    }
}

locationFinder("melboune",2001).then((result) =>{
    console.log(result);
}).catch((err) =>{
    console.log(err);
})

commentcode=async()=>{
    return new Promise((commentingpost)=>{
     setTimeout(()=>{
       commentingpost("comment the post")
    })
 })
 }
likecode=async()=>{
   return new Promise((likingpost)=>{
    setTimeout(()=>{
      likingpost("liked the post")
   })
})
}
async function createpost(){
    var post=new Promise((cpost)=>{
        setTimeout(()=>{
            cpost("post created succesfully")
        },1000)
    })
 var[post,likes,comment]=await Promise.all([ post, likecode(),commentcode()])
 console.log( post)
 console.log( comment)
 console.log( likes)
}
createpost()