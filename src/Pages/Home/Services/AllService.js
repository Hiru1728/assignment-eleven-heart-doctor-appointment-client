import React, { useState } from 'react';
import ShowAllService from './ShowAllService';

const AllService = () => {
    const [services, setServices] = useState([]);
    fetch('https://assignment-eleven-heart-doctor-appointment-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    return (
        <div>
            <h1 className='text-center font-extrabold w-15 py-4'>All Surgery</h1>
            <p className='text-center mb-4'>You can see all Surgery. Which is you need for your patient.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ShowAllService
                        key={service._id}
                        service={service}

                    ></ShowAllService>)
                }
            </div>
        </div>
    );
};

export default AllService;