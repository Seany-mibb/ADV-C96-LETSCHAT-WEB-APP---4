const firebaseConfig = {
    apiKey: "AIzaSyAItiqLaEsKioh5i1S1ddLW0Awmx7PcDXg",
    authDomain: "huzzah-7dcfa.firebaseapp.com",
    databaseURL: "https://huzzah-7dcfa-default-rtdb.firebaseio.com",
    projectId: "huzzah-7dcfa",
    storageBucket: "huzzah-7dcfa.appspot.com",
    messagingSenderId: "209037821998",
    appId: "1:209037821998:web:118c30e16a3eb944e237bf"
  };

  if(!firebase.apps.length)
  {
        firebase.initializeApp(firebaseConfig);
  }



  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout()
{
    document.getElementById("logout").play();
    setTimeout(()=>{
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html"
    }, 2000);
}



function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = '';

    document.getElementById("ring").play()
}