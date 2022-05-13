import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews =[
        {
            _id:1,
            text:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            user:'HM Nayem',
            location:'Stack Larner CEO',
            img:people1

        },
        {
            _id:2,
            text:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            user:'Shradha Khapra',
            location:'Appna Collage CEO',
            img: people2
        },
        {
            _id:3,
            text:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            user:'Munjarin',
            location:'10 minute School',
            img: people3
        }
    ]
    return (
        <div>
            <div className="flex justify-between my-20 px-4 md:px-20">
                <div >
                    <h3 className='text-secondary font-bold text-xl '>Testimonial</h3>
                    <h2 className='text-4xl my-2'>What Our Patients Says</h2>
                </div>
                <div className='w-24 md:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20 gap-5">
                {
                    reviews.map(review=> <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;