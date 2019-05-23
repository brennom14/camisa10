// Initialize Firebase
var config = {
    apiKey: "AIzaSyBMSR69Uup09cvDWupNT3Jd6bCbFFld2as",
    authDomain: "desenvolvimento-web-2.firebaseapp.com",
    databaseURL: "https://desenvolvimento-web-2.firebaseio.com",
    projectId: "desenvolvimento-web-2",
    storageBucket: "desenvolvimento-web-2.appspot.com",
    messagingSenderId: "1002553110981"
  };
  firebase.initializeApp(config);
  var bd = firebase.database()
  
  var ref =  bd.ref('/usuarios')
  // Reference messages collection
  
  
  // Save message to firebase
  function saveMessage(){
  // Referenciando a Database e  a pasta onde está sendo adicionado os elementos
    firebase.database().ref('/usuarios'+1).set({
      email:document.getElementById('email').value,
      senha:document.getElementById('senha').value,
  
    });
    /*Alerta mostrado quando efetuar o cadastro*/
    alert("Cadastrado")
  }
  const db = firebase.database();
  var ref = db.ref("usuarios");
  ref.on("child_added", function(snapshot) {
    console.log(snapshot.val());
  });
  
  ref.on('value', (snapshot) => {
    id = snapshot.val(),length
    console.log(`ID: ${id}`);
  
  })
  function buscaPorNome(){
    let nomeDesejado = document.getElementById('txtbusca').value
  
    ref.on('value', async function (snapshot) {
      console.log(snapshot.val().length);
      
      for (let i = 1; i < snapshot.val().length; i++) {
  
          if (snapshot.val()[i].name == nomeDesejado) {         
              sessionStorage.id = (i).toString()
              window.location.href = "index5.html"
          }
      }
  })
  }