// Services
import ApiService from './ApiService';
// Configs
import ApiRoutes from '../configs/api';

const DoctorsService = {
    getDoctorsNearUser: async () => {
        var sessionStorageData = sessionStorage.getItem('userLocation');
        let userCoord = JSON.parse(sessionStorageData);

        var requestUrl = `${ApiRoutes.endpoints.getDoctorsNearby}?lat=${userCoord.lat}&lng=${userCoord.lng}`;
        return ApiService.call(requestUrl);
    },
    getDoctor: async (placeId) => {
        var requestUrl = `${ApiRoutes.endpoints.getDoctor}/${placeId}`;
        return ApiService.call(requestUrl);
    },
    bookAppointment: () => {
        
    }
};

export default DoctorsService;