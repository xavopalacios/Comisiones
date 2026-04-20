const VENTAS_BASE =5;

function calcularComision(numeroVentas, precioProdcuto){

    let comision = 0;
  
    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * precioProdcuto * 0.1
    } else {
        comision = 0
    }
    return comision;
}

function calcular(){
    let compSueldoBase = parseFloat(document.getElementById("txtSueldoBase").value);
    let compNumeroVentas = parseInt(document.getElementById("txtVentas").value);
    let compPrecioProducto = parseFloat(document.getElementById("txtPrecio").value); 

    let comision = calcularComision(compNumeroVentas, compPrecioProducto);
    let sueldoTotal = compSueldoBase + comision;

    document.getElementById("spSueldoBase").textContent = compSueldoBase.toFixed(2);
    document.getElementById("spComision").textContent = comision.toFixed(2);
    document.getElementById("spTotal").textContent = sueldoTotal.toFixed(2);
}