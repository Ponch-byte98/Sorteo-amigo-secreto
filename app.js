// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

// Función para agregar amigos
function agregarAmigo(){
 const inputAmigo = document.getElementById('amigo');
 const nombreAmigo = inputAmigo.value.trim();

 //Validar que el campo no este vacio
 if (nombreAmigo === ""){
    alert ("Por favor, inserta un nombre valido");
    return; //Detiene la ejecución de la función
 }

//Validar que el nombre no se duplique
if (amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo} 'ya esta en la lista' `);
    return;

}

//Agregar el nombre al array (lista) de amigos
amigos.push(nombreAmigo);

//Limpiar el campo de entrada
inputAmigo.value = "";

//Actualizar la lista en el HTML
actualizarLista();
}
//función para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo dentro del contenedor de la lista

    //Recorrer el Array con un ciclo for
    for (let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//función para seleccionar un amigo aleatorio
function sortearAmigo(){
    //validar que haya amigos disponibles
    if (amigos.length === 0){//comprueba el array (lista) esta vacio.
        alert( "No hay amigos disponibles para sortear. Agregar el nombre de un amigo");
        return;
    }
    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length ); //Genera un número aleatorio entre 0 y longitud del array

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Usa el indice aleatorio para obtener un nombre de array 

    //Mostrar el nombre sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong> ${amigoSorteado}</strong>`;
}