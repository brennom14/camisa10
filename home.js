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

bd.ref('/jogadores').on('value', async function (snapshot) {
    snapshot.forEach(jogador => {
        if (jogador.key == sessionStorage.idLogado) {
            document.getElementById('nomeUsuario').innerHTML = jogador.val().name
            document.getElementById('tipoUsuario').innerHTML = jogador.val().tipo
        }
    });
})

bd.ref('/observadores').on('value', async function (snapshot) {
    snapshot.forEach(observador => {
        if (observador.key == sessionStorage.idLogado) {
            document.getElementById('nomeUsuario').innerHTML = observador.val().name
            document.getElementById('tipoUsuario').innerHTML = observador.val().tipo
        }
    });
})