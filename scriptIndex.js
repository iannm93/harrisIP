console.log("test")

let consultations = document.getElementById("consultation")
function display (){

    console.log("test")
   
 consultations.style.display == "block" ? consultations.style.display = "none" : 
 consultations.style.display = "block"; 
}
display()
// consultations.style.display = "none";
$("#navbarText").on("shown.bs.collapse", function(){
    // consultation.style.display = "none"  
  
  consultations.style.visibility ="hidden";
  
  })

  $("#navbarText").on("hidden.bs.collapse", function(){
    // consultation.style.display = "none"  
  
  consultations.style.visibility ="visible";
  
  })