import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const ServicesItem = ({ service }) => {
    const { loading } = useContext(AuthContext)
    const { name, _id, balance, picture, about } = service;
    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Loading...
        </button>
    }
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

export default ServicesItem;