import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';

const MyAllReview = ({ review }) => {
    const { _id, serviceName, service, email, message, img } = review;
    const [myreview, setMyReview] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-rosy-delta.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [service])

    return (
        <tr>
            <th>

            </th>
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
                <div className="avatar">
                    <div className="rounded w-24 h-24">

                        <img src={img} alt="user img" />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyAllReview;