let cart = [
    {id:1, productName:"Phone", quantity:3, unitPrice:4000},
    {id:2, productName:"Cup", quantity:2, unitPrice:30},
    {id:3, productName:"Pencil", quantity:1, unitPrice:40},
    {id:4, productName:"Bag", quantity:2, unitPrice:100},
    {id:5, productName:"Book", quantity:2, unitPrice:30},
    {id:6, productName:"Table", quantity:5, unitPrice:500},
]

cart.map(product =>{
    console.log(product.productName + ": " + product.quantity * product.unitPrice)
})

let quantityOver2 = cart.filter(product => product.quantity > 2 )
console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)
console.log(total)

function addToCart(bag){
    bag.push({id:7, productName:"Chair", quantity:2, unitPrice:250})
}
addToCart(cart)
console.log(cart)
