import userEvent from '@testing-library/user-event';
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyAllReview = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { _id, serviceName, service, email, message, img } = review;
    const [myreview, setMyReview] = useState({});

    useEffect(() => {
        fetch(`https://assignment-eleven-heart-doctor-appointment-server.vercel.app/${service}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyReview(data)
            })
    }, [service])



    return (
        <tr>
            <td>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={myreview.picture} alt="surgery img" />                    </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}

            </td>
            <td>
                {email}
            </td>
            <td>
                {user?.name ? user.name : 'No name'}
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">

                        <img src={img} alt="user img" />
                    </div>
                </div>
            </td>
            <td>
                <Link to={`/reviews/${_id}`}>

                    <button className="btn btn-ghost btn-warning">Update</button>

                </Link>
            </td>
        </tr >
    );
};

export default MyAllReview;