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
    let compSueldoBase = recuperarFloat("txtSueldoBase");
    let compNumeroVentas = recuperarFloat("txtVentas");
    let compPrecioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(compNumeroVentas, compPrecioProducto);
    let sueldoTotal = parseFloat(compSueldoBase) + comision;

    mostrarTexto("spSueldoBase", compSueldoBase.toFixed(2));
    mostrarTexto("spComision", comision.toFixed(2));
    mostrarTexto("spTotal", sueldoTotal.toFixed(2));
}