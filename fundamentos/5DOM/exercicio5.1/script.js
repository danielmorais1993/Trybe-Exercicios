document.getElementById("header-container").style.backgroundColor = "green";
document.querySelectorAll(".emergency-tasks ")[0].style.backgroundColor = "salmon";


let titleEmergency=document.querySelectorAll(".emergency-tasks h3");
for (i=0 ;i<titleEmergency.length ;i++){
   titleEmergency[i].style.backgroundColor="magenta";
}
document.querySelectorAll(".no-emergency-tasks ")[0].style.backgroundColor = "yellow";
let titleNoEmergency=document.querySelectorAll(".no-emergency-tasks h3");
for (i=0 ;i<titleNoEmergency.length ;i++){
   titleNoEmergency[i].style.backgroundColor="black";
}
document.getElementById("footer-container").style.backgroundColor="rgb(0, 51, 0)";