// tab option
var content1 = document.getElementById("content1");
	var content2 = document.getElementById("content2");
	var content3 = document.getElementById("content3");
	var content4 = document.getElementById("content4");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");

	function openProject(){
		content1.style.transform = "translateX(0)";
		content2.style.transform = "translateX(200%)";
		content3.style.transform = "translateX(200%)";
		content4.style.transform = "translateX(250%)";
		btn1.style.color = "#aa15b6";
		btn2.style.color = "#ffffff";
		btn3.style.color = "#ffffff";
		btn4.style.color = "#ffffff";
		content1.style.transitionDelay = "0.3s";
		content2.style.transitionDelay = "0s";
		content3.style.transitionDelay = "0s";
		content4.style.transitionDelay = "0s";
	}
	function openTravel(){
		content1.style.transform = "translateX(200%)";
		content2.style.transform = "translateX(0)";
		content3.style.transform = "translateX(200%)";
		content4.style.transform = "translateX(250%)";
		btn1.style.color = "#ffffff";
		btn2.style.color = "#aa15b6";
		btn3.style.color = "#ffffff";
		btn4.style.color = "#ffffff";
		content1.style.transitionDelay = "0s";
		content2.style.transitionDelay = "0.3s";
		content3.style.transitionDelay = "0s";
		content4.style.transitionDelay = "0s";
	}
	function openMission(){
		content1.style.transform = "translateX(200%)";
		content2.style.transform = "translateX(200%)";
		content3.style.transform = "translateX(0)";
		content4.style.transform = "translateX(250%)";
		btn1.style.color = "#ffffff";
		btn2.style.color = "#ffffff";
		btn3.style.color = "#aa15b6";
		btn4.style.color = "#ffffff";
		content1.style.transitionDelay = "0s";
		content2.style.transitionDelay = "0s";
		content3.style.transitionDelay = "0.3s";
		content4.style.transitionDelay = "0s";
	}
	function openPhotos(){
		content1.style.transform = "translateX(200%)";
		content2.style.transform = "translateX(200%)";
		content3.style.transform = "translateX(200%)";
		content4.style.transform = "translateX(0)";
		btn1.style.color = "#ffffff";
		btn2.style.color = "#ffffff";
		btn3.style.color = "#ffffff";
		btn4.style.color = "#aa15b6";
		content1.style.transitionDelay = "0s";
		content2.style.transitionDelay = "0s";
		content3.style.transitionDelay = "0s";
		content4.style.transitionDelay = "0.3s";
	}