function clickFunction() {
var points=0;
  var choice1= document.querySelector('input[name="q1"]:checked').value;
  if(choice1 == "peppa pig") {
    points +=1;
  }
  else if (choice1 == "Caillou"){
    points +=6;
  }
  else if(choice1 == "Dora the Explorer"){
    points +=13;
  }
  else if (choice1 == "Curious George"){
  points+=21;
  }
  var choice2= document.querySelector('input[name="q2"]:checked').value;
  if(choice2 == "Pink Dress") {
    points +=1;
  }
  else if (choice2 == "Cape"){
    points +=6;
  }
  else if(choice2 == "Off Brand Skechers"){
    points +=13;
  }
  else if (choice2 == "Banana Dress"){
  points +=21;
  }
  var choice3= document.querySelector('input[name="q3"]:checked').value;
  if(choice3 == "Biscuits(cookies)") {
    points +=1;
  }
  else if (choice3 == "Sandwich"){
    points +=6;
  }
  else if(choice3 == "Tamales"){
    points +=13;
  }
  else if (choice3 == "Bananas"){
  points +=21;
}
if(points ==3){
  alert("PEPPA PIG WOO");
}
if(points ==8){
  alert("PEPPA PIG WOO");
}
if(points ==15){
  alert("PEPPA PIG WOO");
}
if(points ==23){
  alert("PEPPA PIG WOO");
}
if(points ==13){
  alert("YOU'RE CALIOU");
}
if(points ==25){
  alert("YOU'RE CALIOU");
}
if(points ==33){
  alert("YOU'RE CALIOU");
}
if(points ==18){
  alert("YOU'RE CALIOU");
}
if(points ==39){
  alert("YOU ARE DORA");
}
if(points ==27){
  alert("YOU ARE DORA");
}
if(points ==32){
  alert("YOU ARE DORA");
}
if(points ==47){
  alert("YOU ARE DORA");
}
if(points ==63){
  alert("YOU ARE CURIOUS GEORGE");
}
if(points ==43){
  alert("YOU ARE CURIOUS GEORGE");
}
if(points ==48){
  alert("YOU ARE CURIOUS GEORGE");
}
if(points ==55){
  alert("YOU ARE CURIOUS GEORGE");
}
if(points ==20){
  alert("You don't match any of them. You are yourself")
}
if(points ==28){
  alert("You don't match any of them. You are yourself")
}
if(points ==40){
  alert("You don't match any of them. You are yourself")
}
if(points ==35){
  alert("You don't match any of them. You are yourself")
}
}
