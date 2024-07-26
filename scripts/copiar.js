function copiarTexto() {    
    try {
        const resultadoDiv = document.getElementById('resultado');
        const resultado = resultadoDiv.innerText;

        // Escribe el texto al portapapeles
        navigator.clipboard.writeText(resultado);
        
        console.log("Se ha copiado en el portapapeles");
    } catch (error) {
        console.error('No se pudo copiar el texto: ', error);
    }

}