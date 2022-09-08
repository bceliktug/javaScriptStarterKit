export class BaseLogger{
    log(data){
        console.log("Default log: " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Elastic log: " + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Mongo log: " + data)
    }
}