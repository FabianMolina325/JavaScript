function convertir() {
    var valore = parseInt(document.getElementById ("valor").value);
    var resultado = 0;
    var dolar = 114.70;
    var euro = 122.85;
    var pesochileno = 0.13;
    var real = 23.33;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos argentinos a Dolar es: " + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos argentinos a Euros es: " + resultado.toFixed(2));
    }
    else if (document.getElementById("tres").checked){
        resultado = valore / pesochileno;
        alert("El cambio de Pesos argentinos a Pesos chilenos es: " + resultado.toFixed(2))
    }
    else if (document.getElementById("cuatro").checked){
        resultado = valore / real;
        alert("El cambio de Pesos argentinos a Reales es: " + resultado.toFixed(2))
    }
}