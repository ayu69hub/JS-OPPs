// 1. Simulate a Food Delivery
// Task:- Create a function that return a promise . It should resolve after 2sec with "🍕pizza delivery".

// Bonus:- Add a chance to reject "❌delivery failed!"

function orderFood(){
    return new Promise((res, rej) => {
        setTimeout(()=> { 
            let chance = Math.random() < 0.7;
            if(chance) res();
            else rej();
          },2000);     
        });
    }

    orderFood()
    .then(function () {
        console.log("🍕 Pizza Delivered");
    })
    .catch(function () {
        console.log("🍕 Pizza Delivered failed");
    })
