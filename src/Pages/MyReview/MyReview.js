import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyAllReview from './MyAllReview';

const MyReview = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('My Review');



    useEffect(() => {
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius token')}`
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

    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Loading...
        </button>
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
                                        <th>Delete Btn</th>
                                        <th>Surgery Image</th>
                                        <th>Surgery Name</th>
                                        <th>Message</th>
                                        <th>Email</th>
                                        <th>User Image</th>
                                        <th>Update Btn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review => <MyAllReview
                                            key={review._id}
                                            review={review}
                                            handleDelete={handleDelete}

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