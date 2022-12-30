function encrypted(){

    var text = document.getElementById("text-encryted").value.toLowerCase();

    var textEncrypted = text.replace(/e/img, "enter");
    var textEncrypted = textEncrypted.replace(/o/img, "ober");
    var textEncrypted = textEncrypted.replace(/i/img, "imes");
    var textEncrypted = textEncrypted.replace(/a/img, "ai");
    var textEncrypted = textEncrypted.replace(/u/img, "ufat");

    document.getElementById("text-unencrypted").innerHTML = textEncrypted;
    document.getElementById("img-busq").style.display = "none";
    document.getElementById("text-busq").style.display = "none";
    document.getElementById("text-busq2").style.display = "none";
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display = "inherit";
    document.getElementById("text-unencrypted").style.display = "show";
    document.getElementById("text-unencrypted").style.display = "inherit";
}

function unencrypted(){

    var text = document.getElementById("text-encryted").value.toLowerCase();

    var textEncrypted = text.replace(/enter/img, "e");
    var textEncrypted = textEncrypted.replace(/ober/img, "o");
    var textEncrypted = textEncrypted.replace(/imes/img, "i");
    var textEncrypted = textEncrypted.replace(/ai/img, "a");
    var textEncrypted = textEncrypted.replace(/ufat/img, "u");

    document.getElementById("text-unencrypted").innerHTML = textEncrypted;
    document.getElementById("hide-image").style.display = "none";
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display = "inherit";
    document.getElementById("text-unencrypted").style.display = "show";
    document.getElementById("text-unencrypted").style.display = "inherit";
}

function copy(){

    var content = document.querySelector("#text-unencrypted");

    content.select();
    document.execCommand("copy");
}

var btn = document.querySelector("#button-encrypted");
btn.onclick = encrypted;

var btn2 = document.querySelector("#button-unencrypted");
btn2.onclick = unencrypted;

var btn3 = document.querySelector("#button-copy");
btn3.onclick = copy;