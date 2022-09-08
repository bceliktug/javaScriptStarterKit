import { users } from '../data/users.js'
import DataError from '../models/dataError.js'

export default class UserServices {
    constructor(loggerServices){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerServices = loggerServices
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.validateCustomer(user)){
                        this.customers.push(user)
                    }
                    break;

                case "employee":
                    if(!this.validateEmployee(user)){
                        this.employees.push(user)
                    }
                    break;
            
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    validateCustomer(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        return hasErrors
    }

     validateEmployee(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }
    
    add(user){
       // this.users.push(user)
        this.loggerServices.log(user)
    }

    list(){
       // return this.users
    }

    getById(id){
        //return this.users.find(u =>u.id === id)
    }
}