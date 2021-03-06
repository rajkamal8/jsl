// DOM MAIPULATION
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// lecture 53

// function sayhello() {
//     var name = document.getElementById("name").value;
//     var message =  "<h2>hello "+name+" !</h2>";
    
//     //document.getElementById("content").textContent = message;
//     document.getElementById("content").innerHTML = message;
//     if(name==="student") {
//         var title = document.querySelector("h1").textContent;
//         title +=" and good";
//         document.querySelector("h1").textContent=title;
//     }
// }


// lecture 54


function sayhello(event) {
    console.log(this);
    var name = document.getElementById("name").value;
    var message =  "<h2>hello "+name+" !</h2>";
    
    //document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;
    if(name==="student") {
        var title = document.querySelector("h1").textContent;
        title +=" and good";
        document.querySelector("h1").textContent=title;
    }
}


// unobtrusive event binding
//document.querySelector("button").addEventListener("click",sayhello);

//second method
document.querySelector("button").onclick = sayhello;