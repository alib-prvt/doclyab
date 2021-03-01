import { navigate } from '@reach/router';

// Constants
import { ROUTES } from '../../constants';
// Components
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const MarkerInfoWindow = ({ overlayDetails, clearInfoWindow }) => {

    if(!overlayDetails) return null;

    const { place_id } = overlayDetails.result;

    const bookAppointment = () => {
        // close info window
        clearInfoWindow();

        navigate(`${ROUTES.BOOK_APPOINTMENT}/${place_id}`, {
            state: {
                previousUrl: ROUTES.FIND_DOCTOR,
                level: 2,
                isOverlay: true
            }
        })
    }

    return (
        <div className="p-2 max-w-xs" data-testid="marker-info-window">
            <DoctorDetails details={overlayDetails.result} />
            <div className="w-full px-4 py-3 bg-black hover:bg-gray-700 cursor-pointer text-btn text-white font-bold text-center mt-6" onClick={() => bookAppointment()} data-testid="book-appointment-btn">Book Appointment</div>
        </div>
    );
};

export default MarkerInfoWindow;