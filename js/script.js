/*var x="hello world";
console.log(x);
var my="my name is raj";
console.log(my);*/
var message= "in global";
console.log("global:message = "+message);

var a = function()
{
    var message = "inside a";
    console.log("a : message = "+message);
    b();
}
a();

function b ()
{
    console.log("b :message = "+message);
}
/* ***************************************************/
var a1 = function()
{
    var message = "inside a1";
    console.log("a1 : message = "+ message);

    function b1 ()
    {
        console.log("b1 :message = "+ message);
    }
    b1();
}
a1();

/* ***************************************************/
message="hi";
console.log(message);



