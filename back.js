
var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat")

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">'+resultCripto+
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ai/g, "a").replace(/ufat/g, "u")
    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">'+resultDescripto+
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textoCopia = document.getElementById('output-texto');

    textoCopia.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}


