const axios = require('axios');

const getLugar = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCErZZfrLfNeThAGRhqnA9kxcyZh0-hVsM`)


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }
}

module.exports = { getLugar };