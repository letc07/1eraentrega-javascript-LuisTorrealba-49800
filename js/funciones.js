function ingresarcliente() {
    let sosCliente = prompt("Sos cliente nuestro?\n1- Sí\n2- No");

    while (sosCliente != 1 && sosCliente != 2) {
        alert("Solo es posible indicar 1- Sos cliente o 2- NO Sos cliente!");
        sosCliente = prompt("Sos cliente?\n1- Sí\n2- No");
    }
    console.log("Sos Cliente?: " + sosCliente);

    return sosCliente;
}

function ingresarTipoPaquete() {
    let tipoPaquete = prompt("Ingrese el Tipo de Dni:\n1- permanente\n2- temporal\n3- Otro:");

    while (tipoPaquete != 1 && tipoPaquete != 2 && tipoPaquete!=3){
        alert("solo es posible indicar las opciones disponibles");
        tipoPaquete = prompt("tipo de dni?\n1- permanente\n2- temporal\n3- Otro:");   
    } console.log("tipo de dni?: " + tipoPaquete)

    return tipoPaquete;
}

function calcularInteresPaquete(tipoPaquete) {
    if (tipoPaquete == "permanente") {
        interesPaquete = 30;
    } else if (tipoPaquete == "temporal") {
        interesPaquete = 40;
    } else {
        interesPaquete = 50;
    }

    return interesPaquete;
}

function ingresarMontoSolicitado() {
    let montoSolicitado = parseFloat(prompt("Ingrese el Monto del Préstamo: (Máx: $" + montoSolicitadoMax + ")"));

    while (montoSolicitado > montoSolicitadoMax) {
        alert("Superaste el Monto Máximo permitido! Máx: $" + montoSolicitadoMax);
        montoSolicitado = parseFloat(prompt("Ingrese el Monto del Préstamo: (Máx: $" + montoSolicitadoMax + ")"));
    }

    return montoSolicitado;
}

function solicitarCuotas() {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36")); 

    while (cuotas != 12 && cuotas != 24 && cuotas != 36) {
        alert("Solo es posible solicitar en 12/24/36 Cuotas!");
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36"))
    }

    return cuotas;
}

function calcularInteresCuota(cuotas) {
    if (cuotas == 12) {
        interesCuota = 80;
    } else if (cuotas == 24) {
        interesCuota = 160;
    } else if (cuotas == 36) {
        interesCuota = 240;
    } else {
        interesCuota = 320;
    }

    return interesCuota;
}

function calculoValorCuota() {
    let cuotaPura = montoSolicitado / cuotas; //83.333
    let interesPaqueteCuota = interesPaquete / cuotas; 
    let interesCuotaCuota = interesCuota / cuotas;
    let inflacionCuota = inflacion / cuotas;
    

    let cuotaPuraInteresPaqueteCuota = (cuotaPura * interesPaqueteCuota) / 100;
    let cuotaPuraInteresCuotaCuota = (cuotaPura * interesCuotaCuota) / 100;
    let cuotaPurainteresCuota = (cuotaPura * inflacionCuota) / 100;
    

    let valorCuota = cuotaPura + cuotaPuraInteresPaqueteCuota + cuotaPuraInteresCuotaCuota + cuotaPurainteresCuota;
    console.log("Valor de Cuota: $" + valorCuota);

    return valorCuota;
}

function informarCalculoPrestamo() {
    
    let salida = "SIMULADOR DE PRÉSTAMO:\n\n";
    salida += "Sos cliente: " + cliente + "\n";
    salida += "Tipo de Paquete: " + tipoPaquete + "\n";
    salida += "Monto del Préstamo: $" + montoSolicitado + "\n";
    salida += "Cuotas: " + cuotas + "\n\n";
    salida += "Total a Pagar:\n";
    salida += cuotas + " cuotas de $" + valorCuota.toFixed(2);
    
    return salida;
}