const {ErrorState} = require("../context/ErrorContext");

const URL = 'http://26.252.6.100:17500/api';

async function getData(path = '', init = {}) {
    try {
        const response = await fetch(`${URL}${path}`, init);
        if (response.ok) {
            return await response.json();
        }
        throw response
    } catch (e) {
        throw e
    }
}

module.exports = getData;