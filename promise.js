// server a code jb bhi server ke liye hoga usually wo async nii hoga pr jb bhi req kahi aur jayegi wo kb tk response laayegi ka koi bharosa nii h.

const pr = new Promise(function (res, rej) {
    console.log("instagram jaao data lao");
    console.log("instagram mein data collect ho rh h");
    console.log("instagram mein data collect mein error aaya");
    res();
});

pr.then(function () {
    console.log("resolved");

}).catch(function (){
    console.log("rejected");
});