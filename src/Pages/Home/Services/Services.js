import React, { useState } from 'react';

const Services = () => {
    const [services, setServices] = useState();

    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    return (
        <div>
            <h2>Here are the services </h2>
        </div>
    );
};

export default Services;