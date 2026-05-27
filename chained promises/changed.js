// 2. Chained Promises: User -> Posts -> Comments 

// Task:
// 1. Create a getUser() -> resolve with {id:1, name: "Ayush"}
// 2.getPosts(userId) -> resolve with list of post tittles
// 3. getComments(postId) -> resolve with comments
// Chain them together using .then() and log the final result.

function getUser(){
    return new Promise((res, rej) => {
        setTimeout(function () {
            res({ id:1, name: "Ayush" });
        },2000);
        
    });
}
function getPosts(userId) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(["tittle 1", "tittle 2"]);  
        },1000);
        
    });
}

function getComments(postId){
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(["wahoooo", "wonderful"]);  
        },1000);
        
    });
}
getUser()
.then(function (data) {
    console.log(data);
    return getPosts(data.id);
})
.then(function(tittles){
    console.log(tittles);
    return getComments("assdwfs");
})
.then(function (cmts) {
    console.log(cmts);
})
.finally(function (){
    console.log("all data fetched");
});
