import APIRequest from './APIRequest';

class APICalls {

    #request = new APIRequest();

    set authToken(token) {
        this.#request.authToken = token;
    }

    login = (email, password) => {
        return this.#request.post('/login', { email, password });
    };

    register = (name, email, password, password_confirmation, policy) => {
        return this.#request.post('/register', { name, email, password, password_confirmation, policy });
    };

    reset = (email) => {
        return this.#request.post('/send-email', { email });
    }

    tours = (pageIndex, signal, pageSize = 10) => {
        return this.#request.get('/tours', { pageIndex, pageSize, signal });
    };

    usergroups = (pageIndex, signal, pageSize = 10) => {
        return this.#request.get('/usergroups', { pageIndex, pageSize, signal });
    }
};

export default new APICalls();