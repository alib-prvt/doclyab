const DoctorDetails = ({ details }) => {

    if(details === null || details === undefined) return null;

    const { name, formatted_address, formatted_phone_number } = details;

    return (
        <>
            <div className="flex space-x-3 cursor-pointer mb-6" data-testid="doctor-details">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300"></div>
                <div>
                    <p className="text-xl font-medium" data-testid="doctor-name">{name}</p>
                    <p className="text-sm font-light text-gray-400">Specialist Dermatologist M.D</p>
                </div>
            </div>

            <div className="w-full">
                <ul className="text-sm text-gray-500">
                    <li className="pb-4" data-testid="doctor-address">{formatted_address}</li>
                    <li className="pb-4" data-testid="doctor-phone">Telephone: {formatted_phone_number}</li>
                    <li className="">This is the Doctors services description detailing everything we can provide to you.</li>
                </ul>
            </div>
        </>
    );
}

export default DoctorDetails;