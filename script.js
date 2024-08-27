const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const textosMsj = document.querySelector(".textosMsj");
const img = document.querySelector(".muñeco");
const btnCopiar = document.querySelector(".btn_copiar");



function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""
    textosMsj.style.visibility = "hidden";
    img.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
    mensaje = document.querySelector(".mensaje").removeAttribute('disabled');
}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ofat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}


function botonDesencriptar() {
    const textoDesencriptado = Desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function Desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ofat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function copy() {
    let copiarTexto = document.querySelector(".mensaje");
    copiarTexto.select();
    document.execCommand("copy");
    mensaje.style.backgroundImage = "none";

}

document.querySelector(".btn_copiar").addEventListener("click", copy);

// restricción minusculas y sin acentos
textArea.addEventListener('input', function (event) {
    let valor = textArea.value;

    // Remover acentos y convertir a minúsculas
    valor = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

    textArea.value = valor;
});