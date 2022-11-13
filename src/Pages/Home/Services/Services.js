import React, { useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [services, setServices] = useState([]);

    fetch('https://assignment-eleven-heart-doctor-appointment-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    return (
        <div>
            <h2>Here are the services :{services.length} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesItem
                        key={service._id}
                        service={service}
                    ></ServicesItem>)
                }
            </div>
            <div>
                <button>See All Service</button>
            </div>
        </div>
    );
};

export default Services;