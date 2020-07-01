var objhello = new Object ();
objhello = {
    speakWord : "Hello",
    speak : function (name){
        console.log(objhello.speakWord+" "+name);
    }
};