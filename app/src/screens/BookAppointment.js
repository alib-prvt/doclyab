import { useEffect, useState } from 'react';
import DoctorDetails from '../components/DoctorDetails/DoctorDetails';

// Services
import DoctorsService from '../services/DoctorsService';

const BookAppointment = ({ placesId }) => {
    const [ doctorsData, setDoctorsData ] = useState(false);

    useEffect(() => {

        async function fetchData() {
            var response = await DoctorsService.getDoctor(placesId);

            if(response.status === 200) {
                let doctorsData = response.data;
                setDoctorsData(doctorsData.result);
            }
        }
        if(placesId !== null) {
            fetchData();
        }
    }, [placesId]);

    return (
        <div className="absolute w-full h-screen top-0 z-10 bg-black bg-opacity-80 flex items-center">

            <div className="w-full max-w-screen-md mx-auto grid grid-cols-2">
                <div className="px-5 py-5 bg-white rounded-l-md">
                    <h3 className="text-2xl font-bold mb-4">Book an appointment</h3>

                    <p className="mt-4 mb-2 text-sm font-medium">Booking with...</p>

                    <DoctorDetails details={doctorsData} />

                </div>
                <div className="p-10 bg-gray-200 rounded-r-md">
                    <p className="text-xs mt-2 text-center">Please fill out the form below to schedule.</p>
                </div>
            </div>

        </div>
    );
}

export default BookAppointment;