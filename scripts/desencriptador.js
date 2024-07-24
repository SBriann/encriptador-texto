let desencriptacion = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

function desencriptarTexto () {
    let mensajeRecibido = document.getElementById('areaTexto').value; // Valor recibido
    let mensajeDesencriptado = ""; // Almacena mensaje desencriptado

    mensajeDesencriptado = mensajeRecibido;
    
    // Ciclo para evaluar el valor de cada llave de desencriptacion
    for (let llave in desencriptacion) {
        // Expresion regular que indica que se reemplace todas las coincidencias
        let expRegular = new RegExp(llave, 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(expRegular, desencriptacion[llave]);
    }

    console.log(mensajeDesencriptado);    
}