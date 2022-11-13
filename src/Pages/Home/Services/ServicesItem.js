import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = ({ service }) => {
    const { name, _id, balance, picture, about } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='text-2xl text-orange-600 font-semibold'>Cost:{balance}</h4>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline btn-warning ">More Details</button>
                    </Link>
                </div >
            </div>
        </div >
    );
};

export default ServicesItem;