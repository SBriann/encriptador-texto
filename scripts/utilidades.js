class ObjetoModicar {
    constructor(elemento, clase) {
        this.elemento = elemento;
        this.clase = clase;
    }
}

const CLASE_OCULTAR = "ocultar"; // Clase que oculta el elemento gracias al CSS definido

const TEXTO_VACIO = new ObjetoModicar(".salida_texto_vacio", CLASE_OCULTAR); // Elemento que se muestra cuando no ha habido un mensaje aun
const TEXTO_INVALIDO = new ObjetoModicar(".salida_texto_error", CLASE_OCULTAR); // Elemento que se muestra cuando no se cumple el formato del texto
const TEXTO_COPIADO = new ObjetoModicar(".salida_texto_copiado", CLASE_OCULTAR); // Elemento que se muestra cuando se ha copiado el texto
const RESULTADO = new ObjetoModicar(".salida_texto_resultado", CLASE_OCULTAR); // Elemento que muestra el resultado



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

// Usa las funciones añadirClaseElemento y eliminarClaseElemento
function modificarClaseElemento(listaAñadir, objetoEliminar) {
    for (objetoAñadir of listaAñadir) {
        añadirClaseElemento(document.querySelector(objetoAñadir.elemento), objetoAñadir.clase);
    }

    eliminarClaseElemento(document.querySelector(objetoEliminar.elemento), objetoEliminar.clase);
}

// Añadir el valor de la clase al elemento
function añadirClaseElemento(elemento, valorClase) {
    elemento.classList.add(valorClase);
}

// Eliminar el valor de la clase al elemento
function eliminarClaseElemento(elemento, valorClase) {
    elemento.classList.remove(valorClase);
}