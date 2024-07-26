function copiarTexto() {    
    try {
        const resultadoDiv = document.getElementById('resultado');
        const resultado = resultadoDiv.innerText;

        // Escribe el texto al portapapeles
        navigator.clipboard.writeText(resultado);

        // Muestra el mensaje de texto copiado
        modificarClaseElemento(
            [TEXTO_INVALIDO, RESULTADO, TEXTO_VACIO], // Elementos que se quieren ocultar
            TEXTO_COPIADO // Elemento que se quiere mostrar
        )

        // Deshabilita los botones encriptar y desencriptar
        document.getElementById("boton_encriptar").setAttribute("disabled", "true");
        document.getElementById("boton_desencriptar").setAttribute("disabled", "true");

        setTimeout(() => {
            modificarClaseElemento(
                [TEXTO_INVALIDO, RESULTADO, TEXTO_COPIADO], // Elementos que se quieren ocultar
                TEXTO_VACIO // Elemento que se quiere mostrar
            )
            document.getElementById("boton_encriptar").removeAttribute("disabled")
            document.getElementById("boton_desencriptar").removeAttribute("disabled");
        }, 2000);


    } catch (error) {
        console.error('No se pudo copiar el texto: ', error);
    }

}