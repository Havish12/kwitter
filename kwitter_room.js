
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8o1OZ94vHob97Hj5dYyQ-zpr9nm6DqxY",
      authDomain: "activity-1-614f2.firebaseapp.com",
      databaseURL: "https://activity-1-614f2-default-rtdb.firebaseio.com",
      projectId: "activity-1-614f2",
      storageBucket: "activity-1-614f2.appspot.com",
      messagingSenderId: "870312710220",
      appId: "1:870312710220:web:68ed4506736531f870a4e9",
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_input");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";

    function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html"
}
