import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ShowAllService = ({ service }) => {
    const { name, _id, balance, picture, about } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='h-3/4'>
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} alt="Surgery" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='text-2xl text-orange-600 font-semibold'>Cost: {balance}</h4>
                <p>{about.length > 100 ? about.substring(0, 100) + '....' : about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline btn-warning ">More Details</button>
                    </Link>
                </div >
            </div>
        </div >
    );
};

export default ShowAllService;