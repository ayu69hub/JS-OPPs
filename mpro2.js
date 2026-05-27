class MobileShop{
    constructor(){
        this.mobiles = [];
    }
    addMobile(mobile){
        this.mobiles.push(mobile);
    }
    
    listAllMobiles(){
        this.mobiles.forEach(function (mb) {
            console.log(`${index+1} - ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`)
        })
    }
}
class Mobile{
    constructor(company,model,price,color){
        this.id = Maths.floor(Math.random()*100000);
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.price = price;
        this.sims = [];
    }
    geyMobileInfo(){
        console.log(
            `${this.brand} - ${this.model} = ${this.price} - ${this.color}`

        );
    }
    insertSim(sim){
        if (this.sims.length == 2) {
            console.log("sorry you already have 2 sims installed.");
            return;
        }
        this.sims.push(sim);
    }
}

class Sim{
    constructor(brand,balance){
        this.brand = brand;
        this.balance = balance;
    }
   addBalance(balance) {
    if(balance<0){
        console.log("to add balance give amount greater then 0");
        return;
    }
    this.balance += balance;
   } 
}

let myMobileShop = new MobileShop();
let samsung = new Mobile("Samsung", "Galaxy s23", 1200000, "black");
let tatadocomo = new Sim("tata docomo", 300);
samsung.insertSim(tatadocomo);
myMobileShop.addMobile(samsung);