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

var ref = bd.ref('/jogadores/' + sessionStorage.id)
// Reference messages collection


const db = firebase.database();
var ref = db.ref("jogadores");

window.onload = carregar()


function carregar() {
  bd.ref('/jogadores').once('value', async function (snapshot) {
    snapshot.forEach(jogador => {
      if (jogador.key == sessionStorage.id) {
        retornaHtml(
          jogador.val().name,
          jogador.val().data,
          jogador.val().cpf,
          jogador.val().sexo,
          jogador.val().altura,
          jogador.val().posição,
          jogador.val().peso,
          jogador.val().email,
          jogador.val().senha,
          jogador.val().conf2,
          jogador.val().celular,
          jogador.val().telefone
        )
      }
    });
  })

  bd.ref('/observadores').once('value', async function (snapshot) {
    snapshot.forEach(observador => {
      if (jogador.key == sessionStorage.id) {
        retornaHtml(
          observador.val().name,
          observador.val().data,
          observador.val().cpf,
          observador.val().sexo,
          observador.val().altura,
          observador.val().posição,
          observador.val().peso,
          observador.val().email,
          observador.val().senha,
          observador.val().conf2,
          observador.val().celular,
          observador.val().telefone
        )
      }
    });
  })
}


function retornaHtml(name, data, cpf, sexo, altura, posição, peso, email, senha, conf2, celular, telefone) {
  console.log(name, data, cpf, sexo, altura, posição, peso, email, senha, conf2, celular, telefone);

  document.getElementsByTagName('input')[0].value = name
  document.getElementsByTagName('input')[1].value = data
  document.getElementsByTagName('input')[2].value = cpf
  document.getElementsByTagName('input')[3].value = sexo
  document.getElementsByTagName('input')[4].value = altura
  document.getElementsByTagName('input')[5].value = posição
  document.getElementsByTagName('input')[6].value = peso
  document.getElementsByTagName('input')[7].value = email
  document.getElementsByTagName('input')[8].value = celular
  document.getElementsByTagName('input')[9].value = telefone
}


async function editar() {
  console.log(document.getElementsByTagName('input')[3]);

  await bd.ref("/jogadores/" + sessionStorage.id).set({
    name: document.getElementsByTagName('input')[0].value,
    data: document.getElementsByTagName('input')[1].value,
    cpf: document.getElementsByTagName('input')[2].value,
    sexo: document.getElementsByTagName('input')[3].value,
    altura: document.getElementsByTagName('input')[4].value,
    posição: document.getElementsByTagName('input')[5].value,
    peso: document.getElementsByTagName('input')[6].value,
    email: document.getElementsByTagName('input')[7].value,
    celular: document.getElementsByTagName('input')[8].value,
    telefone: document.getElementsByTagName('input')[9].value

  });

  alert("Atualizado")
}

async function excluir() {
  await bd.ref("/jogadores/" + sessionStorage.id).remove()
  alert("Excluido")
}

console.log(sessionStorage.id);
