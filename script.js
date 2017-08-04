document.getElementById("test").innerHTML="we here!";
function myFunction() {
   document.getElementById("mepara").innerHTML = "Hola, me llamo Lesli. Soy un estudiante a Chapel Hill High School y estoy emocionado de estar aquí";
}
function twoFunction() {
  if (document.getElementById("sun").picture === "sun"){
    document.getElementById("sun").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMzZFcdpEva5g1qt8DEjti6NkVAaRhtYdXdrOqvccAfbdQ9AVdpHqr_u9";
    document.getElementById('sun').picture="moon";
  }
  else {
    document.getElementById("sun").src="https://spaceplace.nasa.gov/templates/featured/sun/sunburn300.png";
    document.getElementById('sun').picture="sun"
  }
}
