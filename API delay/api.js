// 3.Fake API Delay

// task:
// Write a function fakeApiCall(endpoint) that:
//  . Accepts a string like "user " or "posts"
//  . Resolve with some dummy data after a random delay(1-3sec).

function fakeApiCall(endpoint){
    const data = {
        user : ["ayu", "kimmu", "shivu"],
        posts : ["hey champs", "great going everyone", "lets build this"],
    
    };
     
    let delay = Math.random() * 2000 + 1000; 
    return new Promise(function (res, rej) {
        setTimeout(function () {
           res(data[endpoint]);
        },delay);
    });
}

fakeApiCall("users").then(function (data) {
    console.log(data);
});

fakeApiCall("post").then(function (data) {
    console.log(data);
});