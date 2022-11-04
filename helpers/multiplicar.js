const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base = 5, arr) => {
	try {
		let salida = "";

		arr.forEach((item) => {
			salida += `${item} ${'*'.blue} ${base} = ${item * base}\n`;
		});
		console.log(salida);

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `tabla-${base}.txt`;
	} catch (error) {
		console.log(error);
	}
};
//module -> objeto global en node
module.exports = {
	crearArchivo,
};
