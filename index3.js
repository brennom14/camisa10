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
  document.getElementById('retornoTotal').innerHTML =
    `
    <div class="container">
      <h4>Nome:</h4>
     <input value="${name}"><br>
     <p></p>
     <h4>Data:</h4>
     <input value="${data}"><br>
     <p></p>
     <h4>CPF:</h4>
     <input value="${cpf}"><br>
     <p></p>
     <h4>Sexo:</h4>
     <input value="${sexo}"><br>
     <p></p>
     <h4>Altura:</h4>
     <input value="${altura}"><br>
     <p></p>
     <h4>Posição:</h4>
     <input value="${posição}"><br>
     <p></p>
     <h4>Peso:</h4>
     <input value="${peso}"><br>
     <p></p>
     <h4>Email:</h4>
     <input value="${email}"><br>
     <p></p>
     <h4>Senha:</h4>
     <input value="${senha}"><br>
     <p></p>
     <h4>Confirmação de senha:</h4>
     <input value="${senha}"><br>
     <p></p>
     <h4>Celular:</h4>
     <input value="${celular}"><br>
     <p></p>
     <h4>Telefone:</h4>
     <input value="${telefone}"><br>
     <p></p>
  </div>
  `
}