import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ShowAllReview from './ShowAllReview/ShowAllReview';

const ShowService = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});
    const serviceShow = useLoaderData();
    const { picture, balance, _id, name, about } = serviceShow;

    const url = `https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews?`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })


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
                console.log(data);
                form.reset();
            })
            .catch(error => console.error(error))
    }




    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Surgery" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4>Coast: {balance}</h4>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add Review</button>
                </div>

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
                            {
                                reviews.map(review => <ShowAllReview
                                    key={review._id}
                                    review={review}
                                ></ShowAllReview>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default ShowService;