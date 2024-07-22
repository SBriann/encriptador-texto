let encriptacion = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

function encriptarTexto () {
    let mensajeRecibido = document.getElementById('areaTexto').value; // Valor recibido
    let mensajeEncriptado = ""; // Almacena mensaje encriptado
    let listaCaracteres = mensajeRecibido.split(''); // Lista de caracteres

    // Ciclo para recorrer la lista de caracteres
    for (let i = 0; i < listaCaracteres.length; i++) {
        // Validacion de cada caracter con objeto encriptacion
        if (listaCaracteres[i] in encriptacion){
            mensajeEncriptado = mensajeEncriptado +  encriptacion[listaCaracteres[i]];
            continue;
        }
        mensajeEncriptado = mensajeEncriptado + listaCaracteres[i];
    }
    console.log(mensajeEncriptado);
}