
function read_more(){
	document.querySelector(".dots").style.display = "none";
	document.querySelector(".read-more").style.display = "inline";
	document.querySelector(".read-more").style.transition = "0.3s ease";
	document.querySelector("#btn").style.display = "none";
	document.querySelector("#btn1").style.display = "block";
}

function read_less(){
	document.querySelector(".dots").style.display = "inline";
	document.querySelector(".read-more").style.display = "none";
	document.querySelector("#btn").style.display = "block";
	document.querySelector("#btn1").style.display = "none";
}