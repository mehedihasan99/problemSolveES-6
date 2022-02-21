// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const products = [
    {name:"laptop", price: 4000, quantity:3},
    {name:"phone", price: 5000, quantity:3},
    {name:"tv", price: 24000, quantity:1},
    {name:"fridge", price: 54000, quantity:1}
]
const result = products.find(product => product.price == 5000 );
console.log(result);