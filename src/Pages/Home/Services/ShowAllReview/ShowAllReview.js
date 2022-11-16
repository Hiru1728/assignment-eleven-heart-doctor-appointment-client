import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const ShowAllReview = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { message, email, serviceName, img } = review;
    return (
        <tr>
            <td>
                <div className=" items-center font-bold">
                    {serviceName}
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
                <div className="avatar items-center">
                    <div className="rounded w-24 h-24">

                        <img src={img} alt="user img" />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ShowAllReview;