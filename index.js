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

var ref = bd.ref('/jogadores')
// Reference messages collection


// Save message to firebase
function saveMessage() {

  firebase.auth().createUserWithEmailAndPassword(document.getElementById('email2').value, document.getElementById('senha2').value)
    .then(function success(userData) {
      // console.log(userData.user.uid);
      // Referenciando a Database e  a pasta onde está sendo adicionado os elementos
      firebase.database().ref('/jogadores/' + userData.user.uid).set({
        name: document.getElementById('name').value,
        data: document.getElementById('data').value,
        cpf: document.getElementById('cpf').value,
        sexo: document.getElementById('sexo').value,
        altura: document.getElementById('altura').value,
        posição: document.getElementById('posição').value,
        peso: document.getElementById('peso').value,
        email: document.getElementById('email2').value,
        conf2: document.getElementById('conf2').value,
        celular: document.getElementById('cel').value,
        telefone: document.getElementById('tel').value
      });
      alert("Cadastrado")
    })


}



function buscaPorNome() {
  let nomeDesejado = document.getElementById('txtbusca').value

  ref.on('value', async function (snapshot) {
    snapshot.forEach(jogador => {
      if (jogador.val().name == nomeDesejado) {
        sessionStorage.id = jogador.key
        window.location.href = "index3.html";
      }
    });
  })
}



var refUsuarios = bd.ref('/usuarios')
// Reference messages collection



// Save message to firebase
function saveUser() {
  // Referenciando a Database e  a pasta onde está sendo adicionado os elementos
  firebase.auth().createUserWithEmailAndPassword(document.getElementById('email').value, document.getElementById('senha').value)
  /*Alerta mostrado quando efetuar o cadastro*/
  alert("Cadastrado")
}

function funcao(event) {
  if (event.keyCode == "13") {
    buscaPorNome()
  }
}


document.addEventListener('keydown', funcao)