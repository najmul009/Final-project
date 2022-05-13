import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.text}</p>
                <div className="card-actions flex items-center	mt-8">

                    <div className="avatar mr-4">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4>{review.user}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;