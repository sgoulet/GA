//here we set an event listener on the li tag
document.getElementsByTagName("li")[0].addEventListener("click",function(){
//here we toggle the slideDown class on/off on the parentNode of the li (our)
//three lines if it isn't clicked on the click > toggle on; if it is clicked,
//on the click > toggle off (we add & remove the class on the click)
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});
