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
    let esValido = validarTexto(mensajeRecibido); // Validacion mayusculas y caracteres especiales

    // Si no hay mensaje no se evalua nada
    if (mensajeRecibido.trim().length == 0) {
        modificarClaseElemento(
            [TEXTO_INVALIDO, RESULTADO, TEXTO_COPIADO], // Elementos que se quieren ocultar
            TEXTO_VACIO // Elemento que se quiere mostrar
        )
        return;
    }

    if (esValido) {
        mensajeDesencriptado = mensajeRecibido;
        
        // Ciclo para evaluar el valor de cada llave de desencriptacion
        for (let llave in desencriptacion) {
            // Expresion regular que indica que se reemplace todas las coincidencias
            let expRegular = new RegExp(llave, 'g');
            mensajeDesencriptado = mensajeDesencriptado.replace(expRegular, desencriptacion[llave]);
        }
        
        modificarValorResultado(mensajeDesencriptado);
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