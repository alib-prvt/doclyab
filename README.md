## Introduction

Doc.ly technical solution by Alisdair Buttery

Email: alisdairb1995@gmail.com

## Prerequisites

1. A Google Maps API key is required with access to: Maps JavaScript API, Places API (One can be provided)

## How do i run the app solution?

The API and front-end both require seperate commands to run; follow the below steps to launch the application;

#### App solution
1. Navigate to the app folder in the solution root
2. Locate and change the file named `example.env` to `.env`
3. In the file now named `.env` locate the environment variable `REACT_APP_GMAPS_API_KEY` and paste in your Google Maps API key after the `=`
4. Install the required dependencies using the command `npm install`
5. Once dependecies have installed run `npm run start` to launch the app; this will launch on port 3000.

#### Server solution
1. Navigate to the server folder in the solution root
2. Locate and change the file named `example.env` to `.env`
3. In the file now named `.env` locate the environment variable `REACT_APP_GMAPS_API_KEY` and paste in your Google Maps API key after the `=`
4. Install the required dependencies using the command `npm install`
5. Once dependecies have installed run `npm run watch-server` to launch the app; this will launch on port 4000.

## Thought process

My main focus was to quickly and efficiently scaffold up a prototype based on the wireframes given; specifically focusing on the desktop experience for now.

I split the solution into two pieces: an API and a UI which consumes the API. 

This was done to decouple both areas and keep each solution focused on their task at hand; it also allows each solution to be deployed, scaled and released independently and for the API to potentially be offered to other consumers.

When retrieving Doctors data I took the approach of implementing this behind the applications own API thus removing the front-ends reliance on knowing how Google Places API is implemented, reduce exposure of any API keys and allowing in future the backend to take control of things such as sanitising data to reduce the response payload without burdening the user-experience.

I would in future move this behind a Doctors data service layer on the backend with the endpoint implementing the service layer; this will then allow the endpoint and response we send to remain the same no matter what data source we use for the Doctor's data. This would allow us to keep the API un-versioned and the response consistently the same for the end user.

For the app front-end Create-React-App was used to scaffolding the project; primarily due to time constraints otherwise i would usually build up the project from scratch with Webpack and the desired dependencies.

Using Reach Router the `Find a Doctor` and `Appointment booking` pages are their own route to aid with the user experience specifically for the ability so share and access the booking form of a specific doctor without the need to search the map.

## Future improvements

### General
- Refactor front-end app to use Typescript and more in-depth use of Typescript on the server project
- Use backend to filter Doctors data, reduce fields sent to front-end. Filter out non-operational businesses
- Enhanced unit test coverage

### UI
- Responsive work to better support all screen sizes
- Recenter map on click of a doctor icon
- Add dynamic top margin to map container to prevent hiding behind the absolute positioned header
- Move geolocation implementation into a service layer for accessing all things location
- Add Loading/permissions error screens
- Change home icon to be specific to the 'home' context/different from those for a doctor
- Booking form integration with endpoint; basic form validation. Handle backend providing vaidation errors and success messages

### Backend API
- Secure endpoints with auth (basic auth or JWT token)
- Implement test coverage of endpoints with mocking of data provider
- Consistent response format whether success or error
- Add POST endpoint to receive booking requests
- Booking endpoint to provide extra sanitisation and validation on data such as ensuring appointment is in future

## Technology used

#### Backend
- Node V14.16.0 LTS
- Typescript
- Koa node.js framework
- Koa-Cors: Help alleviate the dreaded CORS issue when working across localhost

### Front-end
- Create-React-App
- Reach router
- Axios
- React-Google-Maps: Used for integrating Google maps
- React Helmet: Allows manipulation of the document head, specifically used to change page titles

### Tooling
- Jest
- React testing library

### Dev environment tooling
- Visual Studio code
- Postman