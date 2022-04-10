import http from '@/services/common-api-calls.js';

class JQLApi {
    parseData(data) {
        return http.post('/parse', data);
    }
}

export default new JQLApi();