var firebaseConfig = {
      apiKey: "AIzaSyBtuDYMTbY75n844TsxZp05sRrjEE_bJ4E",
      authDomain: "kwitter-website-1b18d.firebaseapp.com",
      databaseURL: "https://kwitter-website-1b18d-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-1b18d",
      storageBucket: "kwitter-website-1b18d.appspot.com",
      messagingSenderId: "329483110014",
      appId: "1:329483110014:web:12909ade70a9d083f1fa2f",
      measurementId: "G-8S647N9VBX"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
 } });  }); }
getData();
function logout(){
      window.location="index.html"
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}