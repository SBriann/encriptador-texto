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
    let esValido = validarTexto(mensajeRecibido); // Validacion mayusculas y caracteres especiales

    if (esValido) {
        // Ciclo para evaluar cada caracter del mensaje recibido
        for (let caracter of mensajeRecibido) {
            // Validacion de cada caracter con objeto encriptacion
            if (caracter in encriptacion){
                mensajeEncriptado = mensajeEncriptado + encriptacion[caracter];
                continue;
            }
            mensajeEncriptado = mensajeEncriptado + caracter;
        }

        modificarValorResultado(mensajeEncriptado);
        limpiarAreaTexto();
        añadirClaseElemento(document.querySelector(CLASE_TEXTO_VACIO), CLASE_OCULTAR); // Añade la clase definida en CLASE_OCULTAR
        eliminarClaseElemento(document.querySelector(CLASE_RESULTADO), CLASE_OCULTAR); // Elimina la clase definida en CLASE_OCULTAR
    } else {
        // Notificar
        console.log("No es válido el texto digitado");
    }
}