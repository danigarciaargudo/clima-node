const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const yargs = require('./yargs/yargs').argv;



let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `El clima en ${coors.direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo encontrar el clima de ${direccion}`;
    }

}

getInfo(yargs.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));