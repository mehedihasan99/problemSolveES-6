/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */
const myName = "mehedi hasan";
console.log(myName);
let myOldAge = 22;
console.log(myOldAge);
// now age
myOldAge = 23;
console.log(myOldAge);
//----------------- object--------------
const mySelf = {name : "mehedi hasan", homeCity : "Sylhet", occupation : "Student"};
// -------------- template string--------------
const aboutMe = `This is ${myName}.He comes from ${mySelf.homeCity}. He's occupation is ${mySelf.occupation} `
console.log(aboutMe);