let amigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo");
    let nome = nomeAmigo.value.trim(); 

   
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    
    amigos.push(nome);

    
    nomeAmigo.value = "";

    
    atualizarLista();
}


function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

   
    listaAmigos.innerHTML = "";

 
    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        listaAmigos.appendChild(item);
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Lista Vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    
    let valorAleatorio = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[valorAleatorio];

    
    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
