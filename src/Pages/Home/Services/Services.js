import React, { useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    fetch('https://assignment-eleven-heart-doctor-appointment-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    return (
        <div>
            <h2>Here are the services :{services.length} </h2>
        </div>
    );
};

export default Services;