import axios from 'axios';

const request = (
    url,
    method = 'GET',
    accessToken,
    headers = {},
    requestData
) => {
    var requestHeaders = headers;
    if(accessToken){
        requestHeaders["Authorization"] = `Bearer ${accessToken}`;
    }

    const config = {
        method,
        url,
        data: requestData,
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            ...requestHeaders
        }
    };

    return axios(config);
};

const ApiService = {
    call: async (url, params = {}, accessToken) => {
        const { method = 'GET', headers = {}, requestData = {} } = params;
        return request(url, method, accessToken, headers, requestData);
    }
}

export default ApiService;