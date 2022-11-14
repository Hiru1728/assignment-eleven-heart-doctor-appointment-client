import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowService = () => {
    const service = useLoaderData();
    const { picture, balance, _id, name, about } = service;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Surgery" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4>Coast: {balance}</h4>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowService;