let arrayAmigos = [];

function agregarAmigo() {
    let name = document.getElementById('amigo').value;
    let lista = document.getElementById('listaAmigos');

    if (name.trim() !== '') {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = name;
        lista.appendChild(nuevoElemento);
        arrayAmigos.push(name);
    } else {
        alert("Ingresar un nombre");
    }
    document.getElementById('amigo').value = "";
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (arrayAmigos.length != 0) {
        let numeroRandom = Math.floor(Math.random() * arrayAmigos.length)
        let nombreRandom = arrayAmigos[numeroRandom];
        let elementoResultado = document.createElement('li');
        elementoResultado.textContent = "El nombre aleatorio: " + nombreRandom;
        resultado.appendChild(elementoResultado);

        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        arrayAmigos = [];
    } else {
        alert("La lista esta vacia");
    }
}
