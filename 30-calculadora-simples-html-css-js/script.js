function insert(num){
    var numero = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = numero + num
}

function clean(){
    document.getElementById("resultado").innerHTML = ""
    console.log('funcionou')
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML
    if(resultado){
        // A função eval() computa um código JS representado como uma string.
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
}