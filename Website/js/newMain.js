function clicked() {
	var user;
	var errorCode;
	var errorMessage;
	
	firebase.auth().signInWithCustomToken(token).then((userCredential) => {
		// Signed in
		user = userCredential.user;
		// ...
	}).catch((error) => {
		errorCode = error.code;
		errorMessage = error.message;
		// ...
	});
}