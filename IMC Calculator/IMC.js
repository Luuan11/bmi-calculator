function calcular(){
    let imc;
    let res = document.getElementById('res')

    let peso= parseInt(document.getElementById("peso").value);
    document.getElementById('pesoval').textContent = peso + " kg";

    let altura = parseInt(document.getElementById("altura").value);
    document.getElementById("alturaval").textContent = altura + " cm"

    imc = (peso/ Math.pow( (altura/100), 2)).toFixed(1);

    res.textContent = imc;

    if(imc < 18.5){
        categoria = "Abaixo do peso";
        res.style.color = "#ffc44d";

    }else if(imc >= 18.5 && imc <= 24.9 ){
        categoria = "Peso Normal";
        res.style.color = "#0be881";

    }else if (imc >= 25 && imc <= 29.9 ){
        categoria = "Acima do peso";
        res.style.color = "#ff884d";

    }else{
        categoria = "Obeso";
        res.style.color = "#ff5e57"

    }
    document.getElementById('categoria').textContent = categoria;
}
