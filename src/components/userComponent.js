import UserServices from "../services/userServices.js";
import User from "../models/user.js"
import { BaseLogger,ElasticLogger } from "../crossCuttingConserns/logging/logger.js"

console.log("user component loaded")

let logger1 = new ElasticLogger();
let userServices = new UserServices(logger1);


let user1 =  new User(1,"Bulut","Çeliktuğ","İzmir");
let user2 =  new User(2,"Hande","Köse","Manisa");

userServices.add(user2)
userServices.add(user1)

console.log(userServices.list())
console.log(userServices.getById(2))



userServices.getById(1)
userServices.list()

let customer = {
    id:1, firstName:"Bulut",
}

//prototyping
customer.lastName = "Çeliktuğ"
console.log(customer.lastName)