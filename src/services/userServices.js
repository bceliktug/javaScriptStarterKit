export default class UserServices {
    constructor(loggerServices){
        this.users =[]
        this.loggerServices = loggerServices
    }
    add(user){
        this.users.push(user)
        this.loggerServices.log(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u =>u.id === id)
    }
}