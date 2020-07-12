document.addEventListener("DOMContentLoaded",
function(event) {
    document.querySelector("button").addEventListener("click",function() {
        
        
        // call server to get the name
        $ajaxutils.sendGetRequest("/json/data/name.json",function (res) {
            var message = res.firstname+" "+res.lastname;
            if(res.food) {
                message += "likes food"; 
            }
            else {
                message +=" doesnt like food";
            }
            message +=" and uses <br>";
            message +=res.number;
            message +=" display of coding";
            document.querySelector("#content").innerHTML = "<h2>hello "+message;
        });
        
    });

}
);