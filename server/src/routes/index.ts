import * as Router from 'koa-router';
import { Client, PlaceDetailsResponse, PlacesNearbyResponse } from "@googlemaps/google-maps-services-js";

const router = new Router();
const client = new Client({});
const gmapsApiKey = process.env.GMAPS_API_KEY;

interface GetDoctorsRequest {
    lat: number;
    lng: number;
}

router.get('/doctors', async (ctx, next) => {
    const params = ctx.request.query; // TODO: Typescript types???
    
    let response = await client
        .placesNearby({
            params: {
                keyword: 'Doctors',
                location: `${params.lat}, ${params.lng}`,
                radius: 50000, // meters
                key: gmapsApiKey
            },
            timeout: 1000, // milliseconds
        })
        .then((r:PlacesNearbyResponse) => {
            return r.data.results;
        })
        .catch((e) => {
            return "Error occurred fetching Doctors near by";
        });

    if(typeof response == "object" && response.length === 0){
        ctx.status = 204;
    } else if(typeof response !== "object") {
        ctx.status = 500;
    }

    ctx.body = response;
});

router.get('/doctor/:placeid', async (ctx, next) => {
    const placeId = ctx.params.placeid; // TODO: Typescript types???

    let response = await client
        .placeDetails({
            params: {
                place_id: placeId,
                fields: [
                    'name',
                    'adr_address',
                    'formatted_address',
                    'formatted_phone_number',
                    'rating',
                    'website',
                    'place_id'
                ],
                key: gmapsApiKey
            },
            timeout: 1000, // milliseconds
        })
        .then((r:PlaceDetailsResponse) => {
            return r.data;
        })
        .catch((e) => {
            return "Error occurred fetching individual doctor";
        });

    if(typeof response == "object"){
        ctx.status = 200;
    } else if(typeof response !== "object") {
        ctx.status = 500;
    }

    ctx.body = response;
});

router.post('/appointment', async (ctx, next) => {

});

export const routes = router.routes();
