


function recuperarTexto(idCompontente) {
    return document.getElementById(idCompontente).value;
}

function recuperarFloat(idCompontente) {
    return parseFloat(recuperarTexto(idCompontente));
}


function mostrarTexto(idComponente, texto) {
    document.getElementById(idComponente).textContent = texto;
}