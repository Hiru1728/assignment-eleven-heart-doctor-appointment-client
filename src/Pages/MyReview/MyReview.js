import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyAllReview from './MyAllReview';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {

                setReviews(data)
            })
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete.');
        if (proceed) {
            fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })

        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
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
                    const remaining = reviews.filter(review => review.id !== id);
                    const approving = reviews.find(review => review._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div>
            {
                reviews.length === 0 ? <div className='w-auto h-auto justify-center items-center'>
                    <h1 className='text-5xl  text-center'>No reviews were added.</h1>
                </div>
                    :
                    <div>
                        <h2 className="text-5xl">You have {reviews.length} reviews</h2>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>

                                        <th>Surgery Image</th>
                                        <th>Surgery Name</th>
                                        <th>Message</th>
                                        <th>User Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review => <MyAllReview
                                            key={review._id}
                                            review={review}
                                            handleDelete={handleDelete}
                                            handleStatusUpdate={handleStatusUpdate}
                                        ></MyAllReview>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyReview;