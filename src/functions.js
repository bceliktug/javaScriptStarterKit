function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi: " + productName + " \nAdet: " + quantity)
}

addToCart(15)
addToCart("Yumurta", 10)
//addToCart("Karpuz")

let sayHello = () =>{
    console.log("Hello man")
}


function addToCart2(productName, quantity, productPrice){

}
addToCart2("Elma",5,10)
addToCart2("Karpuz",3,20)
addToCart2("Armut",2,15)


let product1 = {
    productName: "Elma", quantity:5,productPrice: 10
}
function addToCart3(product){
    console.log("Ürün: " + product1.productName + 
    "\nAdet: " + product1.quantity + 
    "\nFiyat: " + product1.productPrice)
}

addToCart3(product1)

let product2 = {
    productName: "Elma", quantity:5,productPrice: 10
}

let product3 = {
    productName: "Elma", quantity:5,productPrice: 10
}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart4(x){
    console.log(x)
}

let products = [
    {productName:"Telefon",quantity: 5, productPrice: 1500},
    {productName:"Şapka",quantity: 5, productPrice: 1500},
    {productName:"Bileklik",quantity: 5, productPrice: 1500}
]

addToCart4(products);

//rest
function add(...numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total = total + numbers[i];
    }
    console.log(total);
}
add(20,30)
add(20,30,40)
add(20,30,40,50);

//sperade
let numbers = [30,10,500,600,40]
//console.log(...numbers)
console.log(Math.max(...numbers))

//distructing
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu)
console.log(marmara)
console.log(icAnadoluSehirleri)



let newProductName, newQuantity, newProductPrice
({productName:newProductName, quantity:newQuantity,
 productPrice:newProductPrice} = {productName:"Elma", quantity:5, productPrice:10})

console.log(newProductName)



