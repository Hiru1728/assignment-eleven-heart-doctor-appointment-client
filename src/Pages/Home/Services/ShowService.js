import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ShowAllReview from './ShowAllReview/ShowAllReview';

const ShowService = () => {
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const serviceShow = useLoaderData();
    const { picture, balance, _id, name, about } = serviceShow;

    useEffect(() => {
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/review?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [reviews, _id])


    const addReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL || 'No image';


        const review = {
            service: _id,
            serviceName: name,
            email,
            message,
            img,
        }

        fetch('https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review added successfully');
                    form.reset();
                }

            })
            .catch(error => console.error(error))
    }

    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Loading...
        </button>
    }


    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Surgery" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4>Coast: {balance}</h4>
                <p>{about}</p>

                {
                    (user?.email) ?
                        <form onSubmit={addReview}>
                            <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                            <div className='card-actions justify-end'>
                                <input className='btn btn-warning ' type="submit" value="Add Review" />
                            </div>
                        </form>
                        :
                        <div>
                            <h1 className='text-center lg:text-4xl'>Please login to add a review
                                <button className='btn btn-outline btn-warning ml-4'><Link to='/login'>Log In</Link></button>
                            </h1>
                        </div>

                }

                <div>
                    {
                        reviews.length === 0 ? <h1>No reviews are added</h1>
                            :
                            <div>
                                <h3 className="text-2xl">Total {reviews.length} reviews</h3>
                                <div className="overflow-x-auto w-auto">
                                    <table className="table w-auto lg:w-full">
                                        <thead>
                                            <tr>
                                                <th>Surgery Name</th>
                                                <th>Message</th>
                                                <th>Email</th>
                                                <th>User Name</th>
                                                <th>User Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                reviews.map(review => <ShowAllReview
                                                    key={review._id}
                                                    review={review}
                                                ></ShowAllReview>)
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default ShowService;