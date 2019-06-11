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
            <h5>Nome Completo</h5>
              <input value="${jogador.val().name}"></input>
              <br><br>
              <h5>Data de Nascimento</h5>
              <input value="${jogador.val().data}"></input>
              <br><br>
              <h5>Sexo</h5>
              <input value="${jogador.val().sexo}"></input>
              <br><br>
              <h5>Altura</h5>
              <input value="${jogador.val().altura}"></input>
              <br><br>
              <h5>Altura</h5>
              <input value="${jogador.val().posição}"></input>
              <br><br>
              <h5>Posição</h5>
              <input value="${jogador.val().peso}"></input>
              <br><br>
              <h5>Peso</h5>
              <input value="${jogador.val().clube}"></input>
              <br><br>
              <h5>Último clube associado?</h5>
              <input value="${jogador.val().email}"></input>
              <br><br>
              <h5>Email</h5>
              <input value="${jogador.val().celular}"></input>
              <br><br>
              <h5>Nome do Responsável</h5>
              <input value="${jogador.val().name3}"></input>
              <br><br>
              <h5>Celular do Responsável</h5>
              <input value="${jogador.val().cel3}"></input>
              <br><br>
              <p></p>
            </div>
            `
        }
        );
    })
}

carregar()