import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const oldReview = useLoaderData();
    const [review, setReview] = useState({ oldReview })

    const updateReview = (event) => {
        event.preventDefault();
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews/${oldReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');

                }
            })
    }
    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.message;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <form onSubmit={updateReview}>
            <textarea onChange={handleInputChange} name='message' className="textarea textarea-bordered h-24 w-full" defaultValue={oldReview.message} placeholder="Your Message" required></textarea>
            <div className='card-actions justify-end'>
                <input className='btn btn-warning ' type="submit" value="Update Review" />
            </div>
        </form>
    );
};

export default UpdateReview;