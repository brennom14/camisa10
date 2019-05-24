// Initialize Firebase
let id
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

var ref =  bd.ref('/jogadores')
// Reference messages collection


// Save message to firebase
function saveMessage(){
// Referenciando a Database e  a pasta onde está sendo adicionado os elementos
  firebase.database().ref('/jogadores/' + id).set({
    name:document.getElementById('name').value,
    data:document.getElementById('data').value,
    cpf:document.getElementById('cpf').value,
    sexo:document.getElementById('sexo').value,
    altura:document.getElementById('altura').value,
    posição:document.getElementById('posição').value,
    peso:document.getElementById('peso').value,
    email:document.getElementById('email').value,
    senha:document.getElementById('senha').value,
    conf2:document.getElementById('conf2').value,
    celular:document.getElementById('cel').value,
    telefone:document.getElementById('tel').value
  }); 
  alert("Cadastrado")
  
}
const db = firebase.database();
var ref = db.ref("jogadores");
ref.on("child_added", function(snapshot) {
  console.log(snapshot.val());
});


ref.on('value', (snapshot) => {
  id = snapshot.val().length
  console.log(`ID: ${id}`);
  
})


function buscaPorNome(){
  let nomeDesejado = document.getElementById('txtbusca').value

  ref.on('value', async function (snapshot) {
    console.log(snapshot.val().length);
    
    for (let i = 1; i < snapshot.val().length; i++) {

        if (snapshot.val()[i].name == nomeDesejado) {         
            sessionStorage.id = (i).toString()
            window.location.href = "index3.html"
        }
    }
})
}