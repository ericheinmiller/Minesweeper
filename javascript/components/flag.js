function flag(){
	var target = (event.currentTarget.id);
	if(document.getElementById(target).style.backgroundColor == "red"){
		document.getElementById(target).style.backgroundColor = "lightgrey";
		document.getElementById(target).style.color = "lightgrey";
	}
	else{
		document.getElementById(target).style.backgroundColor = "red";
		document.getElementById(target).style.color = "red";
	}
	return false;
}
