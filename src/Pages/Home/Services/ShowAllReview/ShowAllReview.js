import React from 'react';

const ShowAllReview = ({ review }) => {
    const { message } = review;
    return (
        <div>
            <h4>{message}</h4>
        </div>
    );
};

export default ShowAllReview;