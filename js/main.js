
const inflacion = 187.50;

const montoSolicitadoMax = 1000000;
let interesPaquete;
let interesCuota;
let cliente = "NO";


let sosCliente = ingresarcliente();


let tipoPaquete = ingresarTipoPaquete();
interesPaquete = calcularInteresPaquete(tipoPaquete);


let montoSolicitado = ingresarMontoSolicitado();

// Preguntar por la Cantidad de Cuotas
let cuotas = solicitarCuotas();
interesCuota = calcularInteresCuota(cuotas);

// Cálculos de Interes
let valorCuota = calculoValorCuota();

// Salida
let salida = informarCalculoPrestamo(); 
alert(salida);
console.log(salida);