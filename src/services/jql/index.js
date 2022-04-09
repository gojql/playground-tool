import http from '@/services/common-api-calls.js';

class JQLApi {
    getUser(id) {
        return http.get(`/users/${id}`);
    }
}

export default new JQLApi();