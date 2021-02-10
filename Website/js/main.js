function clicked() {
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var validuser = "Admin";
	var validpass = "Password";
	
	if(user.value == validuser && pass.value == validpass) {
		window.alert("You are logged in as " + user.value);
		window.location.href="pages/Homepage.html";
	}
	else  {
		window.alert("Incorrect username or password");
	}
}