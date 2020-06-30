// /*var x="hello world";
// console.log(x);
// var my="my name is raj";
// console.log(my);*/
// var message= "in global";
// console.log("global:message = "+message);

// var a = function()
// {
//     var message = "inside a";
//     console.log("a : message = "+message);
//     b();
// }
// a();

// function b ()
// {
//     console.log("b :message = "+message);
// }
// /* ***************************************************/
// var a1 = function()
// {
//     var message = "inside a1";
//     console.log("a1 : message = "+ message);

//     function b1 ()
//     {
//         console.log("b1 :message = "+ message);
//     }
//     b1();
// }
// a1();

// /* ***************************************************/
// message="hi";
// console.log(message);


// function factory and passing function 
// var person={
//     name:"raj",
//     phone:123,
//     last:"kamal"
// };
// console.log(person["name"]);

// var people=new Object();
// people.name="rajat";
// people.detail=new Object();
// people.detail.phones=12345;
// people.detail.catname="sicily";
// console.log(people);


// function fin() {
//     console.log("hello world");
// }
// fin();

// var fun = function () {
//     console.log("hi into this fucking world ");
// };
// console.log(fun);



// this keyword use of it 

// function test() {
//     console.log(this);
//     this.myname = "yaakov";
// }
// test();
// console.log(this.myname);

// // function constructor
// // example 1
// function Circle (radius) { //there is also different technique for this in ES2016
//    this.radius = radius;
//    // console.log(this);
// //    this.getarea = 
// //    function () {
// //        return Math.PI*Math.pow(this.radius,2);
// //    } alternate option
// //but waste of memory and process 

// }
// Circle.prototype.getarea = 
// function () {
//     return Math.PI*Math.pow(this.radius,2);
// }
// var mycircle = new Circle(10);
// console.log(mycircle);
// console.log(mycircle.getarea());
// // in this new object created with the name mycircle 
// //point to the same point address

// var othercircle = new Circle (20);
// console.log(othercircle);

// // doesn`t copy the area code but can use the prototype of 
// // of area to accomplish its task 



// //object literals and this keyword
// // in this "this keyword refer to the object "

// var literalcircle = {
//     radius : 10 ,
    
//     getarea : function () {
//         // below mention if not include next to next line 
//         // statement  uses this which implies global object windows
//         // below helps to implies to the literal object 
//         var self = this;
//         console.log(this);

//         var increaseradius = function () {
//             self.radius = 20;
//         };
//         increaseradius ();
//         return Math.PI*Math.pow(this.radius,2);
//     }
// };
// console.log(literalcircle.getarea());