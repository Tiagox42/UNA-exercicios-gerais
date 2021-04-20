function question1f(){
    document.getElementById("p1").innerHTML="Estamos todos em Pandemia";
}

function question2f(){
    document.getElementById("p2").innerHTML="Estamos todos em Pandemia";
}

function question3f(){
    var caixa = prompt('Digite um texto');
    document.getElementById("p3").innerHTML=caixa;
}

function apagar(){
    document.title = "Prática 04 - APAGADO";
    document.getElementById("lampada").src="./off.gif"
    document.getElementById("bapagar").style.display="none";
    document.getElementById("bacender").removeAttribute("disabled");
    document.getElementById("p4").innerHTML="Hora de dormir";
    document.getElementById("questoes2").style.backgroundColor="black"
    document.getElementById("p4").style.color="white";
    document.getElementById("bacender").style.display="inline-block";
}

function acender(){
    document.title = "Prática 04 - ACESO";
    document.getElementById("lampada").src="./on.gif"
    document.getElementById("bacender").style.display="none";
    document.getElementById("bapagar").style.display="inline-block";
    document.getElementById("p4").innerHTML="E assim teve luz, ACORDE!!";
    document.getElementById("questoes2").style.backgroundColor="white"
    document.getElementById("p4").style.color="black";
}

function soma(){
    var numero1 = parseInt(document.getElementById('n1').value);
    var numero2 = parseInt(document.getElementById('n2').value);
    var resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML=resultado;
}