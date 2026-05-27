// koi function ko chalate waqt yeh bata dena ki kaam krne ke baad kon sa function chalana h.
function stepOne(cb){
    console.log("step 1");
    cb();
}

function stepTwo(cb){
    console.log("step 2");
    cb();
}

function stepThree(cb){
    console.log("step 3");
    cb();
}

stepOne(() =>{
    stepTwo(() => {
        stepThree(() => {
            console.log("steps completed");
        })
    })
})