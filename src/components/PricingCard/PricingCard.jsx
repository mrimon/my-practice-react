import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing
    return (
        <div className='flex flex-col border bg-gradient-to-br from-red-400 via-amber-400 to-amber-800 p-4 rounded-xl'>
            {/* card header */}
            <div>
                <h1 className='text-6xl'>{name}</h1>
                <h3 className='text-3xl'>{price}</h3>
            </div>
            {/* card body */}
            <div className='p-3 mt-6 border bg-gradient-to-tr from-red-800 to-amber-300 rounded-xl flex-1'>
                <p className='mb-4'>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <div className='mt-7'>
                <button className='btn w-full hover:text-black hover:bg-transparent hover:border-amber-300'>Enroll Now</button>
            </div>
        </div>
    );
};

export default PricingCard;