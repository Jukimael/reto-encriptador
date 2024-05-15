let texto  = "";
let posicion = 0; 
let listaDeLetras = ['a', 'e', 'i', 'o', 'u'];  
let listaDeEncriptacion = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar() {
    //alert("Encriptando.....");
    let textoModificado = "";
    texto = document.querySelector("textarea").value;

    // Recorremos cada caracter del texto ingresado
    for (let i = 0; i < texto.length; i++) {
        if (listaDeLetras.includes(texto[i])) {
            posicion = listaDeLetras.indexOf(texto[i]);
            textoModificado += listaDeEncriptacion[posicion];
        } else {
            textoModificado += texto[i]; 
        }
    }
    //alert(textoModificado);
    mostrarResultado(textoModificado);
}

function desencriptar() {
    //alert("Desencriptando...");
    let textoModificado = "";
    texto = document.querySelector("textarea").value;

    for (let i = 0; i < texto.length; i++) {
         if (listaDeLetras.includes(texto[i])){
        textoModificado += texto[i];
        posicion = listaDeLetras.indexOf(texto[i]);
        if (i <= texto.length){
            i += listaDeEncriptacion[posicion].length-1;
        }
        } else {
            textoModificado += texto[i];
        }
    }
    //alert(textoModificado);
    mostrarResultado(textoModificado);
}

function mostrarResultado(texto) {
    document.querySelector("textarea").value = "";
    document.querySelector(".caja").style.display = "none";
    document.querySelector(".texto").style.fontSize = "20px";
    document.querySelector(".texto").style.textAlign = "left";
    document.querySelector(".texto").innerHTML = texto;
    document.querySelector(".boton-copiar").style.display = "block";
}

function copiar() {
    let textoCopiado = document.querySelector(".texto");
    navigator.clipboard.writeText(textoCopiado.textContent);
}