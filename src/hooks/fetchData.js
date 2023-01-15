const {ErrorState} = require("../context/ErrorContext");

const URL = 'http://26.252.6.100:17500/api';

async function fetchData(path = '', init = {}) {
    const response = await fetch(`${URL}${path}`, init);
    if (response.ok) {
        return await response.json();
    }
    throw response
}

module.exports = fetchData;