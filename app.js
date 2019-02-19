const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// OPCIÓN A

// lugar.getLugar(argv.direccion)
//     .then(resp => {
//         console.log('FN getLugar', resp);
//         clima.getClima(resp.latitud, resp.longitud)
//             .then(resp => {
//                 console.log('Tª', resp.main.temp);
//             })
//             .catch(e => {
//                 console.log(e);
//             })
//     })
//     .catch(e => console.log(e));


// OPCIÓN MEJORADA

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `El clima en ${coors.direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo encontrar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));