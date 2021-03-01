## Introduction

Doc.ly technical solution by Alisdair Buttery
Email: alisdairb1995@gmail.com

## How do i run the solution?

The solution is split into two seperate

demo.env file


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

## Thought process

My main focus was to quickly and efficiently scaffold up a prototype based on the wireframes given; specifically focusing on the desktop experience for now.

I split the solution into two pieces: an API and a UI which consumes the API. 

This was done to decouple both areas and keep each solution focused on their task at hand; it also allows each solution to be deployed, scaled and released independently and for the API to potentially be offered to other consumers.

When retrieving Doctors data i took the approach of implementing this behind the applications own API thus removing the front-ends reliance on knowing how Google Places API implemented and in future having to do things such as sanitising data to reduce the response payload.

I would in future move this behind a Docotrs data service layer on the backend with the endpoint implementing the service layer; this will then allow the endpoint and response we send to remain the same no matter what data source we use for the Doctor's data. This would allow us to keep the API un-versioned and the response consistently the same for the end user.

For the app front-end Create-React-App was used to scaffolding the project; primarily due to time constraints otherwise i would usually build up the project from scratch with Webpack and the desired dependencies.


## Future improvements

### General
- Refactor front-end app to use Typescript and more in-depth use on the server project
- Response work to better support all screen szes
- Use backend to filter Doctors data, reduce fields sent to front-end. Filter out non-operational businesses

### UI
- Recenter map on click of doctor icon
- Add dynamic top margin to map container to prevent hiding behind the absolute positioned header
- Move geolocation implementation into a service layer for accessing all things location
- Add Loading/permissions error screens
- Change home icon to be specific to the 'home' context/different from those for a doctor
- Booking form integration with endpoint; basic form validation. Handle backend providing vaidation errors and success messages

### Backend API
- Implement test coverage of endpoints with mocking of data provider
- Consistent response format whether success or error
- Add POST endpoint to receive booking requests
- Booking endpoint to provide extra sanitisation and validation on data such as ensuring appointment is in future