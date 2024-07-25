const CLASE_OCULTAR = "ocultar"; // Clase que oculta el elemento gracias al CSS definido
const CLASE_TEXTO_VACIO = ".salida_texto_vacio"; // Clase del elemento que se muestra cuando no ha habido un mensaje aun
const CLASE_TEXTO_INVALIDO = ".salida_texto_error"; // Clase del elemento que se muestra cuando no se cumple el formato del texto
const CLASE_RESULTADO = ".salida_texto_resultado" // Clase del elemento que muestra el resultado

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

// Limpiar el area del texto
function limpiarAreaTexto() {
    document.getElementById('areaTexto').value = "";
}

// Añadir el valor de la clase al elemento
function añadirClaseElemento(elemento, valorClase) {
    elemento.classList.add(valorClase);
}

// Eliminar el valor de la clase al elemento
function eliminarClaseElemento(elemento, valorClase) {
    elemento.classList.remove(valorClase);
}