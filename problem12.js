/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */

const person = {
    name : "mehedi",
    age : 23,
    homeCity: "sylhet",
    aboutHim : { name: "mehedi", age: 23, homeCity: "sylhet"},
    favoriteNum : [7, 21, 49, 3]

}
// console.log(person);
const result = person.aboutHim.homeCity;
// console.log(result);

// optional chaining
const result1 = person.sboutHim?.homeCity;
console.log(result1);

