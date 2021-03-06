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

//var ref = bd.ref('/jogadores')
// Reference messages collection


// Save message to firebase
function cadastrarAtleta() {

  firebase.auth().createUserWithEmailAndPassword(document.getElementById('email2').value, document.getElementById('senha2').value)
    .then(function success(userData) {
      // console.log(userData.user.uid);
      // Referenciando a Database e  a pasta onde está sendo adicionado os elementos
      firebase.database().ref('/jogadores/' + userData.user.uid).set({
        name: document.getElementById('name').value,
        data: document.getElementById('data').value,
        cpf: document.getElementById('cpf').value,
        cidade2: document.getElementById('cidade2').value,
        estado: document.getElementById('estado').value,
        sexo: document.getElementById('sexo').value,
        altura: document.getElementById('altura').value,
        posição: document.getElementById('posição').value,
        peso: document.getElementById('peso').value,
        clube: document.getElementById('clube').value,
        email: document.getElementById('email2').value,
        conf2: document.getElementById('conf2').value,
        celular: document.getElementById('cel').value,
        tel1: document.getElementById('tel1').value,
        name3: document.getElementById('name3').value,
        cel3: document.getElementById('cel3').value,


        tipo: 'atleta'
      });
      alert("Cadastrado")
    })


}

function cadastrarObservador() {

  firebase.auth().createUserWithEmailAndPassword(document.getElementById('email3').value, document.getElementById('senha3').value)
    .then(function success(userData) {
      // console.log(userData.user.uid);
      // Referenciando a Database e  a pasta onde está sendo adicionado os elementos
      firebase.database().ref('/observadores/' + userData.user.uid).set({
        name: document.getElementById('name2').value,
        data: document.getElementById('data2').value,
        cpf: document.getElementById('cpf2').value,
        sexo: document.getElementById('sexo2').value,
        desde: document.getElementById('desde').value,
        cidade: document.getElementById('cidade').value,
        email: document.getElementById('email3').value,
        conf2: document.getElementById('conf3').value,
        celular: document.getElementById('cel2').value,
        telefone: document.getElementById('tel2').value,
        tipo: 'observador'
      });
      alert("Cadastrado")
      window.location.href = "homes.html";
    })


}



function buscaPorNome() {
  console.log(`Entrou na Função`);

  let nomeDesejado = document.getElementById('txtbusca').value
  console.log(nomeDesejado);


  bd.ref('/jogadores').on('value', async function (snapshot) {
    console.log("Entrou aqui");

    snapshot.forEach(jogador => {
      if (jogador.val().name == nomeDesejado) {
        sessionStorage.id = jogador.key
        window.location.href = "perfil.html";
      }
    });
  })

  bd.ref('/observadores').on('value', async function (snapshot) {
    console.log("Entrou aqui");
    snapshot.forEach(observador => {
      if (observador.val().name == nomeDesejado) {
        window.location.href = "busca.html";
        sessionStorage.id = observador.key
      }
    });
  })
  console.log(`Saiu na Função`);
}



var refUsuarios = bd.ref('/usuarios')
// Reference messages collection



// Save message to firebase
function saveUser() {
  // Referenciando a Database e  a pasta onde está sendo adicionado os elementos
  firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('senha').value)
    .then(() => {
      alert("Logado")

      firebase.auth().onAuthStateChanged((user) => {
        sessionStorage.idLogado = user.uid
        window.location.href = "index.html";
      })
    })
    .catch(() => {
      alert("Ocorreu um Erro")
    })
}

function funcao(event) {
  if (event.keyCode == "13") {
    buscaPorNome()
  }
}


document.addEventListener('keydown', funcao)
document.getElementsByClassName('contact')[0].style.display = "none"
document.getElementsByClassName('contact')[1].style.display = "none"

document.getElementById('atleta').addEventListener('click', () => {
  if (document.getElementsByClassName('contact')[0].style.display == "none") {
    document.getElementsByClassName('contact')[0].style.display = "block"
    document.getElementsByClassName('contact')[1].style.display = "none"
  } else {
    document.getElementsByClassName('contact')[0].style.display = "none"
    document.getElementsByClassName('contact')[1].style.display = "block"
  }
})

document.getElementById('observador').addEventListener('click', () => {
  if (document.getElementsByClassName('contact')[1].style.display == "none") {
    document.getElementsByClassName('contact')[1].style.display = "block"
    document.getElementsByClassName('contact')[0].style.display = "none"
  } else {
    document.getElementsByClassName('contact')[1].style.display = "none"
    document.getElementsByClassName('contact')[0].style.display = "block"
  }
})
