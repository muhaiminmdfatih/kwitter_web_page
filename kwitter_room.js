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
document.getElementById("user_name").innerHTML="Welcome"+user_name;
function addRoom(){
  var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"+onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();
function redirectToRoomName(name){
  console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
window.location="index.html"
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

}