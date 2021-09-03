function calc(){
    let num1 = document.getElementById("num1").value
    num1 = parseInt(num1)
    let num2 = document.getElementById("num2").value
    num2 = parseInt(num2)
    let num3 = document.getElementById("num3").value
    num3 = parseInt(num3)
    let parrafo = document.getElementById("texto")
    let resultado = (num1 + num2 + num3) / 3
    let final= Math.round(resultado)
    if( final >= 10){
        parrafo.innerHTML = `Su promedio es ${final} y aprobo`
    }else{
        parrafo.innerHTML = `Su promedio es ${final} y necesita rehacer la materia`
    }
    return parrafo
}


