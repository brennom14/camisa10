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
ref.on("child_added", function (snapshot) {
  console.log(snapshot.val());
});

window.onload = carregar()


function carregar() {
  ref.once('value', async function (snapshot) {
    console.log(snapshot.val().length);

    for (let i = 1; i < snapshot.val().length; i++) {

      if (i == Number(sessionStorage.id)) {
        retornaHtml(
          await snapshot.val()[i].name,
          await snapshot.val()[i].data,
          await snapshot.val()[i].cpf,
          await snapshot.val()[i].sexo,
          await snapshot.val()[i].altura,
          await snapshot.val()[i].posição,
          await snapshot.val()[i].peso,
          await snapshot.val()[i].email,
          await snapshot.val()[i].senha,
          await snapshot.val()[i].conf2,
          await snapshot.val()[i].celular,
          await snapshot.val()[i].telefone)
      }
    }
  })
}


function retornaHtml(name, data, cpf, sexo, altura, posição, peso, email, senha,conf2,celular,telefone) {
  console.log(name, data, cpf, sexo, altura, posição, peso, email, senha,conf2,celular,telefone);
  
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


async function editar(){
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
    calular: document.getElementsByTagName('input')[8].value,
    telefone: document.getElementsByTagName('input')[9].value

  });
  
  alert("Atualizado")
}

async function excluir(){
  await bd.ref("/jogadores/" + sessionStorage.id).remove()
  alert("Excluido")
}

console.log(sessionStorage.id);
