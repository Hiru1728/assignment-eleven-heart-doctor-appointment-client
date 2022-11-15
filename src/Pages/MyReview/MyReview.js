import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyAllReview from './MyAllReview';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [user?.email])

    return (
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
                            ></MyAllReview>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;