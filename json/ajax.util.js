(function (global) {

// set up a namesapce for our utility
    var ajaxutils = {};
    function getRequestObject () {
        if(window.XMLHttpRequest) {
            // return an http request
            return(new XMLHttpRequest());
        }
        else if(window.ActiveXObject) {
         // for very old browser 
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("ajax is not supported!");
            return (null);
        }
    }
// make sn ajax get request request to "requestUrl"
ajaxutils.sendGetRequest = 
    function(requestUrl,responseHandler,isJsonResponse) {
        var request =  getRequestObject();
        request.onreadystatechange = 
        function() {
            handleResponse(request,responseHandler,isJsonResponse);
        };
        request.open("GET",requestUrl,true);
        request.send(null); // for POST only
    };

// only call user provided "responsehandler"
// function if response is ready
// and not an error

function handleResponse(request,responseHandler,isJsonResponse) {
    if((request.readyState==4)&&(request.status==200)) {
        if(isJsonResponse==undefined) {
            isJsonResponse=true;
        }
        if(isJsonResponse) {
            responseHandler(JSON.parse(request.responseText))
        }
        else {
            responseHandler(request.responseText);
        }
    }
}
// expose utilityto the glbal object
global.$ajaxutils = ajaxutils;

})(window);