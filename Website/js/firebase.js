/* 
This file is for the firebase functions used for the website

Developers: Austin Mongold, Austin Newkirk (austinjaynew@gmail.com)
*/



var firebaseConfig = {

	//Honesly, idk what the exactly does. Probably fetches/authinticates the firebase data.
    apiKey: "AIzaSyABrXbvSkA_LqT0zKSTJ3_JHqNcxgyuxsQ",
    authDomain: "music-matters-229420.firebaseapp.com",
    databaseURL: "https://music-matters-229420.firebaseio.com",
    projectId: "music-matters-229420",
    storageBucket: "music-matters-229420.appspot.com",
    messagingSenderId: "939526187420",
    appId: "1:939526187420:web:9bfd8eb38ec627a575c059"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //This function is used to sign in to the website. The actual data for this is stored in firebase.
  function signIn() {
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			var user = userCredentials.user;
			alert("Signed in");
			window.location.href="pages/Homepage.html"
		  })
		  .catch((error) => {
			alert("Incorrect");
			
		  });

  	}

	  //This function detects if the authintication has changed (either signed out to signed in or reversed)
	  firebase.auth().onAuthStateChanged(function(user){
  
		if(user){
		 
		 var email = user.email;
		 if (document.URL.includes("login.html")) {
			window.location.href="pages/Homepage.html"
			alert("You are already logged in as " + email);
		 }

		}

	});


	//This function is used to sign out of the website. This is needed to test some functions.
	function signOut() {
	firebase.auth().signOut().then(() => {
		alert("You have been signed out");
		window.location.href="../Login.html"
	  }).catch((error) => {
		alert("This is a bug. Screenshot this and send it to team 5")
	  })
	}