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
            <div class="card" style="width: 40%;margin-bottom: 20px; display:flex; justify-content:center;">
            <div class="card-body-atleta">
             <h8>Nome: ${jogador.val().name}</h8>
             <h8>Data: ${jogador.val().data}</h8>
             <h8>Sexo: ${jogador.val().sexo}</h8>
             <h8>Posição: ${jogador.val().posição}</h8>
            </div>
            </div>
            `
        }
        );
    })
}

carregar()