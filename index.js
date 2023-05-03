//Dias antes de navidad.
const date = require('date-and-time');
const now = new Date();
const dec = new Date("2023 12 25")

var date_now = date.format(now, 'DD/MM/YYYY');
var date_dec = date.format(dec, 'DD/MM/YYYY');

var restante = date.subtract(dec, now).toDays()

console.log("Desde hoy: " + date_now + " Hasta: " + date_dec + " nos restan " + Math.round(restante))

//Edad de una persona

console.log("Escribe tu fecha en Año Mes Dia");
const a = process.openStdin();

a.addListener("data", (data) => {
    var b = new Date(data)
    var c = date.addMonths(b, -1)
    var edad = date.subtract(now, c).toDays()
    var edadReal = (edad/30)/12
    console.log(`La persona tiene una edad de: ${Math.floor(edadReal)} años`)
    process.exit();
})

