var myImage=document.getElementById("myPhoto");

var imageArray=["acu.jpg", "s.jpg", "h.jpg", "sc.jpg", "nw.jpg"];
var imageIndex=0; 

function changeImage () {
	myPhoto.setAttribute("src", imageArray [ imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}



var intervalHandle = setInterval(changeImage,2500);

myPhoto.onclick=function() {
	clearInterval(intervalHandle);
}
