let amigos = [];


function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); 

   
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    
    amigos.push(nome);

    
    inputNome.value = "";

    
    atualizarLista();
}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

   
    lista.innerHTML = "";

 
    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    
    let valorAleatorio = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[valorAleatorio];

    
    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
