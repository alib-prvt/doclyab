import axios from 'axios';
import DoctorsService from './DoctorsService';
import ApiRoutes from '../configs/api';

jest.mock('axios');

describe('Interact with doctors backend service', () => {
    it('fetches successfully list of nearby doctors', () => {

    });

    it('fetches successfully details of individual doctor', async () => {
        const data = {
            test: 'test'
        };
        const testPlaceId = '123456';
        axios.get.mockResolvedValue(data);

        var response = await DoctorsService.getDoctor(testPlaceId)

        // await expect(DoctorsService.getDoctor(testPlaceId)).resolves.toEqual(data);
        // expect(axios.get).toHaveBeenCalledWith(`${ApiRoutes.endpoints.getDoctor}/${testPlaceId}`);
    });
})