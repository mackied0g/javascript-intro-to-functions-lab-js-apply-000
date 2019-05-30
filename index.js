function shout(String) {
  return String.toUpperCase();
}
function whisper(String) {
  return String.toLowerCase();
}
function logShout(String) {
  console.log(String.toUpperCase());
}
function logWhisper(String) {
  console.log(String.toLowerCase());
}
function sayHiToGrandma(string){
  var uppercase = "HELLO"
  var lowercase = "hello"

  if (string === lowercase){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }else if (string === uppercase){
  }else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }else if (string === "I love you, Grandma."){
    return "I love you, too."