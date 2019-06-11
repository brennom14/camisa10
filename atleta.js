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

function carregar() {
    bd.ref('/jogadores').once('value', function (snapshot) {
        snapshot.forEach(jogador => {
            console.log(`Entrou aqui`);
            
            document.getElementById("retorno").innerHTML = document.getElementById("retorno").innerHTML + `
            <div>
              <p>${jogador.val().name}</p>
              <p>${jogador.val().data}</p>
              <p>${jogador.val().cpf}</p>
              <p>${jogador.val().sexo}</p>
              <p>${jogador.val().altura}</p>
              <p>${jogador.val().posição}</p>
              <p>${jogador.val().peso}</p>
              <p>${jogador.val().clube}</p>
              <p>${jogador.val().email}</p>
              <p>${jogador.val().celular}</p>
              <p>${jogador.val().tel1}</p>
              <p>${jogador.val().name3}</p>
              <p>${jogador.val().cel3}</p>
            </div>
            `
        }
        );
    })
}

carregar()