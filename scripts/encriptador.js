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

    // Si no hay mensaje no se evalua nada
    if (mensajeRecibido.trim().length == 0) {
        modificarClaseElemento(
            [new ObjetoModicar(CLASE_TEXTO_INVALIDO, CLASE_OCULTAR), new ObjetoModicar(CLASE_RESULTADO, CLASE_OCULTAR)], // Elementos que se quieren ocultar
            new ObjetoModicar(CLASE_TEXTO_VACIO, CLASE_OCULTAR) // Elemento que se quieren mostrar
        )
        return;
    }

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

        modificarClaseElemento(
            [new ObjetoModicar(CLASE_TEXTO_VACIO, CLASE_OCULTAR), new ObjetoModicar(CLASE_TEXTO_INVALIDO, CLASE_OCULTAR)], // Elementos que se quieren ocultar
            new ObjetoModicar(CLASE_RESULTADO, CLASE_OCULTAR) // Elemento que se quieren mostrar
        )
    } else { // Si no se cumple con el formato establecido se muestra un mensaje de error
        modificarClaseElemento(
            [new ObjetoModicar(CLASE_TEXTO_VACIO, CLASE_OCULTAR), new ObjetoModicar(CLASE_RESULTADO, CLASE_OCULTAR)], // Elementos que se quieren ocultar
            new ObjetoModicar(CLASE_TEXTO_INVALIDO, CLASE_OCULTAR) // Elemento que se quieren mostrar
        )
    }
}