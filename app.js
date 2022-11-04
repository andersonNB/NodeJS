const {crearArchivo} = require("./helpers/multiplicar");
const colors = require("colors")
console.clear();

const [, , arg3 = "base=5"] = process.argv;
const [, base] = arg3.split("=");
console.log(base);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let base = 6;

crearArchivo(base, arr)
	.then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
	.catch((err) => console.log(err));

//Creando archivos y creando contenido en el
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
// 	if (err) throw err;

// 	console.log(`tabla del ${base} creado`);
// });
