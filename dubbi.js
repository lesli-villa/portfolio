function firstFunction() {
var dubbi =document.getElementById('their').value;
var word = "";
for (var x=0; x<dubbi.length; x++){
  if(dubbi.charAt(x) == "a" || dubbi.charAt(x) == "e" || dubbi.charAt(x) =="i" || dubbi.charAt(x) == "o" || dubbi.charAt(x) == "u") {
    word= word + "ub"+ dubbi.charAt(x);
  }
  else {
    word= word + dubbi.charAt(x);
  }
}
alert(word);
}
