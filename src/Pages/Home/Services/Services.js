import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import AllService from './AllService';
import ServicesItem from './ServicesItem';

const Services = () => {
    useTitle('All Services')
    const [services, setServices] = useState([]);
    fetch('https://assignment-eleven-heart-doctor-appointment-server.vercel.app/homeservices')
        .then(res => res.json())
        .then(data => setServices(data));
    return (
        <div>
            <h2 className='text-center font-extrabold w-15 py-4'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesItem
                        key={service._id}
                        service={service}

                    ></ServicesItem>)
                }
            </div>
            <div className=' items-center text-center'>
                <button className='btn btn-wide btn-warning my-4'>
                    <Link to='/servicesitem'>
                        All Services
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Services;