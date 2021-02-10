firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	} else {
	  // No user is signed in.
	}
  });

function clicked() {
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
}

firebase.auth().signInWithEmailAndPassword(user, pass)
  .then((userCredential) => {
    // Signed in
	var user = userCredential.user;
	window.alert("You are logged in as " + user.value);
		window.location.href="pages/Homepage.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
	var errorMessage = error.message;
	window.alert("Incorrect username or password");
  });