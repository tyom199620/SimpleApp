/**
 * @format
 * @flow
 */

import config from './config';

export default class APIRequest {
    constructor(
        uri = '/',
        method = 'GET',
        authToken = null,
    ) {
        this.uri = uri;
        this._options = { method };
        this._response = {
            data: null,
            status: null
        };
        this._defaultHeaders = {
            'Content-Type': 'application/json; charset=utf-8',
        };
        if (authToken) {
            this._defaultHeaders.Authorization = 'Bearer ' + authToken;
        }
    }

    _request = async (uri, options = {}) => {
        if (uri) {
            this.uri = uri;
        }
        const { params } = options;
        const url = new URL(uri, config.apiURL);
        if (params) {
            Object.keys(params).forEach(key =>
                url.searchParams.append(key, params[key]),
            );
        }
        try {
            this._options = {
                ...this._options,
                ...options,
            };
            const req = await fetch(url, this._options);
            this._response.status = req.status;
            this._response.data = await req.json();
            this._response.message = this._response.data.message;
            console.log("\ndev===========start\n", this._response, "\ndev===========stop");
        } catch (e) {
            console.error(e.message);
        }
        return this._response;
    };

    set authToken(authToken) {
        this._defaultHeaders.Authorization = 'Bearer ' + authToken;
    }

    get authToken() {
        return this._defaultHeaders.Authorization;
    }

    set uri(uri) {
        this._url = config.apiURL + (uri[0] === '/' ? uri.slice(1) : uri);
    }

    set url(url) {
        this._url = url;
    }

    proceed = (options = {}) => {
        return this._request({ ...options });
    };

    get = (uri, params = {}, headers = {}) => {
        delete this._options.body;
        return this._request(uri, {
            params,
            headers: { ...headers, ...this._defaultHeaders },
            method: 'GET',
        });
    };

    post = (uri, body = {}, headers = {}) => {
        return this._request(uri, {
            body: JSON.stringify(body),
            headers: { ...headers, ...this._defaultHeaders },
            method: 'POST',
        });
    };

    put = (uri, body, headers = {}) => {
        return this._request(uri, {
            body,
            headers: { ...headers, ...this._defaultHeaders },
            method: 'PUT',
        });
    };

    delete = (uri, params = {}, headers = {}, body = {}) => {
        return this._request(uri, {
            params,
            body: JSON.stringify(body),
            headers: { ...headers, ...this._defaultHeaders },
            method: 'DELETE',
        });
    };
}
