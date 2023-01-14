const URL = 'http://26.252.6.100:17500/api';

async function useFetch(path = '', init = {}) {
    try {
        const response = await fetch(`${URL}${path}`, init);
        if (response.ok) {
            return await response.json();
        }
        throw response
    } catch (error) {
        console.log(error.message);
        // Failed to fetch
    }
}

module.exports = useFetch;