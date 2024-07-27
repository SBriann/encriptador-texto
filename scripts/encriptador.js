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
            [TEXTO_INVALIDO, RESULTADO, TEXTO_COPIADO], // Elementos que se quieren ocultar
            TEXTO_VACIO // Elemento que se quiere mostrar
        )
        return;
    }

    let esValido = validarTexto(mensajeRecibido); // Validacion mayusculas y caracteres especiales

    if (esValido) {
        // La cantidad de veces que se debe realizar la encriptacion de un mensaje
        let nivelEncriptacion = parseInt(document.getElementById("nivel-select").value);
        for (let i = 1; i <= nivelEncriptacion; i++) {
            mensajeEncriptado = "";
            // Ciclo para evaluar cada caracter del mensaje recibido
            for (let caracter of mensajeRecibido) {
                // Validacion de cada caracter con objeto encriptacion
                if (caracter in encriptacion){
                    mensajeEncriptado = mensajeEncriptado + encriptacion[caracter];
                    continue;
                }
                mensajeEncriptado = mensajeEncriptado + caracter;
            }
            mensajeRecibido = mensajeEncriptado;
        }


        modificarValorResultado(mensajeEncriptado);
        limpiarAreaTexto();

        modificarClaseElemento(
            [TEXTO_VACIO, TEXTO_INVALIDO, TEXTO_COPIADO], // Elementos que se quieren ocultar
            RESULTADO // Elemento que se quiere mostrar
        )
    } else { // Si no se cumple con el formato establecido se muestra un mensaje de error
        modificarClaseElemento(
            [TEXTO_VACIO, RESULTADO, TEXTO_COPIADO], // Elementos que se quieren ocultar
            TEXTO_INVALIDO // Elemento que se quiere mostrar
        )
    }
}