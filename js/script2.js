// console.log("hello coursers !");

// // array 

// var array = new Array();
// array[0]="yaakov";
// array[1]=2;
// array[2]=function (name) {
//     console.log("hello" + name);
// };
// array[3]={course:"html css & js"};

// console.log(array);
// array[2] (" raj");
// console.log(array[3].course);

// short hand array creation 

// var name = [
//     {name:"raj"},
//     {last:"rajat"},
//     23
// ];
// console.log(name);


// var person = {firstName:"John", lastName:"Doe", age:46};
// console.log(typeof person);


// var names = ["raj","rajat","shyam"];
// console.log(names.length);
// for(var i = 0 ; i< names.length ; i++) {
//     console.log("hello " + names[i]);
// }

// names[100]="jim";
// console.log(names[100]);

// var details = ["raj","rajat","shyam","abdul"];

// var myobj = {
//     name:"raj",
//     course:"html,css,js",
//     platform:"coursera"
// };

// for(var prop in myobj)
// {
//     console.log(prop+": "+myobj[prop]);
// }

// // arrays are object 
// var details = ["raj","rajat","shyam","abdul"];
// details.greeting = "hi";
// for(var name in details) {
//     console.log("hello "+details[name]);
// }




// // closures 

// function makemultiplier (multiplier) {
//     function b() {
//         console.log("multiplier is : "+multiplier);
//     }
//     b();
//     return (
//         function (x) {
//             return multiplier*x;
//         }
//     );
// }
// var doubleall = makemultiplier(2);
// console.log(doubleall(10));

// creating object and defining variable and function in it 
// will help in when work include multiple files 


// immediately invoked function expression 

// (function (name) {
// console.log("hello " +name );
// })("coursera");

// (function () {

//     var greet = {};
//     greet.name = "john";
//     var greeting = "hi ";
//     greet.sayhi = function () {
//         console.log(greeting + greet.name);
//     }
//     window.greet = greet;
// })(window);
// greet.sayhi();