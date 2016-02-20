//variable to contain the images to run through the carousel
var images=["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"];
//variable to start at position 0 (counting position 1)
var i=0;
//empty object for the votes variable as it will be filled by the user
var votes=[];
//here we build a function for the previous image that will change the image to the previous images
//so long as the current image is not image "0".
function previousImage(){
	i>0 ? changeImage(--i):0;
}
//here we build a function for the next image which will do the reverse of the previous image by
//checking to be sure that it is not the last image before moving to the next image.
function nextImage(){
	i+1<images.length ? changeImage(++i):calculateVotes();
}
//here we build the function to change the image.
function changeImage(){
	$("#image-to-vote-on").attr("src",images[i]);
	$("#your-vote>option").prop("selected",false);
}
//here we build the function to calculate the users votes.  This function also returns the Total
//deliciousness score to the user.
function calculateVotes(){
	var ave=0;
	if(votes.length!==0){
		votes.forEach(function(element){
			ave+=parseInt(element);
		});
		ave=(Math.round((ave/votes.length) * 100) / 100).toFixed(2);
	}
	$("#image-to-vote-on+div").text("You have reached the end. Total deliciousness score was: "+ave);
}
//here the vote for is changed on the choice of the image by the user and we tell the buttons to
//either skip (next image) or back (previous image) depending on the image the user is on.
$(document).ready(function(){
	$("#your-vote").on("change",function(){
		if(i<images.length){
			votes[i]=$("#your-vote").val();
			nextImage();
		}
	});
	$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
});
