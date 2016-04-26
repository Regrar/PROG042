var square;
var rotation = 0;

window.addEventListener("load", init);

function init() 
{
    console.log("Loaded");
    
    square = document.getElementsByTagName("square")[0];
	square.addEventListener("click", function(e){
		rotation += 45;
		square.style.transform = "rotate("+rotation+"deg)";	
	});  
    
}

