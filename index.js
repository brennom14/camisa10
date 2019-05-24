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
          document.getElementById('retornoTotal').innerHTML = 
          `
    <div id="container-busca">
    <button onclick="closeContainer('container-busca')" class="button-close">
      X
    </button>
    <h4>Nome:</h4>
    <input disabled value="${snapshot.val()[i].name}">
    <h4>Data:</h4>
    <input disabled value="${snapshot.val()[i].data}">
    <h4>CPF:</h4>
    <input disabled value="${snapshot.val()[i].cpf}">
    <h4>Sexo:</h4>
    <input disabled value="${snapshot.val()[i].sexo}">
    <h4>Altura:</h4>
    <input disabled value="${snapshot.val()[i].altura}">
    <h4>Posição:</h4>
    <input disabled value="${snapshot.val()[i].posição}">
    <h4>Peso:</h4>
    <input disabled value="${snapshot.val()[i].peso}">
    <h4>Email:</h4>
    <input disabled value="${snapshot.val()[i].email}">
    <h4>Celular:</h4>
    <input disabled value="${snapshot.val()[i].celular}">
    <h4>Telefone:</h4>
    <input disabled value="${snapshot.val()[i].telefone}">
  </div>
  `
        }
    }
})
}

const closeContainer = (id) => {
  document.getElementById(id).style.display = 'none';
}

var refUsuarios =  bd.ref('/usuarios')
// Reference messages collection

var idUsuarios;

refUsuarios.on('value', async (snapshot) => {
  idUsuarios = await snapshot.val().length
  console.log(`ID USUÁRIO: ${idUsuarios}`);
  
})


// Save message to firebase
function saveUser(){
// Referenciando a Database e  a pasta onde está sendo adicionado os elementos
  firebase.database().ref('/usuarios/'+ idUsuarios).set({
    email:document.getElementById('email').value,
    senha:document.getElementById('senha').value,

  });
  /*Alerta mostrado quando efetuar o cadastro*/
  alert("Cadastrado")
}