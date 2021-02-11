
var firebaseConfig = {
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



  function signIn() {
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			var user = userCredentials.user;
			alert("Signed in");
		  })
		  .catch((error) => {
			alert("Incorrect");
			
		  });

  	}

	  firebase.auth().onAuthStateChanged(function(user){
  
		if(user){
		 
		 var email = user.email;
		 alert("Active User " + email);
		 if (document.URL.includes("Login")) {
			window.location.href="pages/Homepage.html"
		 }

		}

	});

	function signOut() {
	firebase.auth().signOut().then(() => {
		alert("You have been signed out");
		window.location.href="../Login.html"
	  }).catch((error) => {
		alert("This is a bug. Screenshot this and send it to team 5")
	  })
	}
