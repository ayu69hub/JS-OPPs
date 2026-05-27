function stepOne(){
    return new Promise(function(res,rej){
        console.log("step 1");
        res()
    });
    
    
}

function stepTwo(){
    return new Promise(function(res,rej){
        console.log("step 2");
        res()
    });
    
    
}

function stepThree(){
    return new Promise(function(res,rej){
        console.log("step 3");
        res()
    });
    
   
}

stepOne().then(stepTwo).then(stepThree).then(function(){
  console.log("all steps dn");
});
