function myFunc() {
	document.getElementById("submiting").onmouseenter = function () {
		document.getElementById("submiting").style.backgroundColor = "orange";
		
		
	}
}
myFunc();

function Func() {
	document.getElementById("submiting").onmouseleave = function () {
		document.getElementById("submiting").style.backgroundColor = "green";
	}
}
Func();

function Fun() {
	
		document.getElementById("submiting").style.backgroundColor = "green";
	}

Fun();

function login() {
	document.getElementById("frmcontact").onsubmit = function() {
		if (document.getElementById("username").value == "") {
			document.getElementById("errorUser").innerHTML = "Please fill In The Username";
			document.getElementById("errorUser").style.color = "red";
			return false;
		}
	


		

		


		else if (document.getElementById("username").value.length < 2 || document.getElementById("username").value.length > 40) {
			document.getElementById("errorUser").innerHTML = "The value must not be less than 2 or greater than 40";
			document.getElementById("errorUser").style.color = "red";
			return false;
		}
		
		 else if (document.getElementById("password").value == "") {
			document.getElementById("errorPass").innerHTML = "Please fill in the Password";
			document.getElementById("errorPass").style.color = "red";
			return false;
		} 


		else if (document.getElementById("password").value.length < 2 || document.getElementById("password").value.length > 14) {
			document.getElementById("errorPass").innerHTML = "The value must not be less than 2 or greater than 14";
			document.getElementById("errorPass").style.color = "red";
			return false;
		}
		

		

		
		
		
		
		};
	};


login();



function log() {
	document.getElementById("username").onblur = function() {
		
		

		if (document.getElementById("username").value.length < 2 || document.getElementById("username").value.length > 40) {
document.getElementById("errorUser").innerHTML = "The value must not be less than 2 or greater than 14";
			document.getElementById("errorUser").style.color = "red";
			return false;
		} else {
			document.getElementById("errorUser").innerHTML = "valid";
			document.getElementById("errorUser").style.color = "green";
			return true;
		}


		

		
		



		

		
		
		
		
		};
	};


log();

function loginPage() {
	document.getElementById("password").onblur= function() {
		 
		
		 if (document.getElementById("password").value.length < 2 || document.getElementById("username").value.length > 40) {
			document.getElementById("errorPass").innerHTML = "The value must not be less than 2 or greater than 14";
			document.getElementById("errorPass").style.color = "red";
			return false;
		}
		else {
			document.getElementById("errorPass").innerHTML = "valid";
			document.getElementById("errorPass").style.color = "green";
			return true;
		}

	}
}
loginPage();


function loginCheck() {
	document.getElementById("rememberMe").onclick = function() {
	if (document.getElementById("rememberMe").checked) {
		document.getElementById("label").innerHTML="Your Login Details will be saved";
	}
	else {
		document.getElementById("label").innerHTML="Remember me";
	}
}
}
loginCheck();


function input() {
	document.getElementById("tex").onfocus = function() {
		document.getElementById("tex").style.opacity=0.3;
	}
}

input();

function inpu() {
	document.getElementById("tex").onblur = function() {
		document.getElementById("tex").style.opacity=1.5;
	}
}

inpu();

function picture() {
	document.getElementById("icon").onmouseenter = function(){
		document.getElementById("icon").style.opacity = 0.3;
	}
}
picture();

function pictures() {
	document.getElementById("icon").onmouseleave = function(){
		document.getElementById("icon").style.opacity = 1;
	}
}
pictures();