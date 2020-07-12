document.addEventListener("DOMContentLoaded",
function(event) {
    document.querySelector("button").addEventListener("click",function() {
        
        
        // call server to get the name
        $ajaxutils.sendGetRequest("/ajaxl/data/name.txt",function (request) {
            var name = request.responseText;
            //console.log(self.name);
            document.querySelector("#content").innerHTML = "<h2>hello "+name+" !";
        });
        
    });

}
);