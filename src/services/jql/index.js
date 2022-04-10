import axios from '@/services/common-api-calls.js';

class JQLApi {
    getUser(data) {
        return axios.post('/parse',data);
    }
}

export default new JQLApi();