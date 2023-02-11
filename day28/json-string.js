let text =
'{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(text);
debugger;//here code of execution come and stop then using f10 you can go to next steps.
//from server we get data in string format
//JSON.parse(string)=> it convert string into JSON object.
const obj = JSON.parse(text);
console.log("converted obj", obj);