let axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=343f96663d60cf27f7cbb205a64c0c36`)
    return resp.data.main.temp;
}

module.exports = { getClima };