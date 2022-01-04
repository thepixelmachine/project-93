
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg2G5I8NJWfNxM0Wd5FpXXmYXcadKiDUQ",
    authDomain: "kwitter-509c2.firebaseapp.com",
    databaseURL: "https://kwitter-509c2-default-rtdb.firebaseio.com",
    projectId: "kwitter-509c2",
    storageBucket: "kwitter-509c2.appspot.com",
    messagingSenderId: "595397940095",
    appId: "1:595397940095:web:6bb5b381ae4d606c87c04a",
    measurementId: "G-VDMGHPGDTN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();