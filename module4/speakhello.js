var speakWord  = new Object();
speakWord.hello = "Hello ";

speakWord.speak = function (name) {
  console.log(speakWord.hello + " " + name);
}