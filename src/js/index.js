document.addEventListener("DOMContentLoaded",function(){
	var design=300;
	var width=document.documentElement.clientWidth;
	var ratio=width/design*100;
		document.documentElement.style.fontSize=ratio+"px";
		console.log(width);
},false)