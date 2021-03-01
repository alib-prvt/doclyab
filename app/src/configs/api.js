import { environments } from './environment';

const baseUrls = {
    [`${environments.LOCAL}`]: 'http://localhost:4000',
    [`${environments.TEST}`]: 'http://localhost:4000'
};

const baseUrl = baseUrls[process.env.NODE_ENV];

const ApiRoutes = {
    baseUrl,
    endpoints: {
        getDoctorsNearby: `${baseUrl}/doctors`,
        getDoctor: `${baseUrl}/doctor`
    }
};
export default ApiRoutes;