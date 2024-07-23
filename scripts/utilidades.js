// Validar que el texto cumpla con las restricciones (NO mayusculas - NO caracteres especiales)
function validarTexto(texto) {
    let esValido = true; // Valor a retornar
    let listaCaracteres = texto.trim().split(' '); // Lista caracteres (sin espacios)

    // Ciclo para recorrer la lista de caracteres
    for (let caracter of listaCaracteres) {
        // Validacion de cada caracter usando Unicode en expresion regular
        if (!/^[\u0061-\u007A\u0030-\u0039]+$/.test(caracter)){
            // \u0061-\u007A = a-z
            // \u0030-\u0039 = 0-9
            esValido = false; // El texto no es valido
            break;
        }
    }
    return esValido;
}

// Modificar valor del elemento resultado
function modificarValorResultado(resultado) {
    document.getElementById('resultado').innerText = resultado;
}