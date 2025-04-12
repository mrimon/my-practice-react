import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    return (
        <div className='border bg-gradient-to-br from-red-400 via-amber-400 to-amber-800 p-4 rounded-xl'>
            {/* card header */}
            <div>
                <h1 className='text-6xl'>{pricing.name}</h1>
                <h3 className='text-3xl'>{pricing.price}</h3>
            </div>
            {/* card body */}
            <div className='p-3 mt-6 border rounded-xl'>
                <p>{pricing.description}</p>
            </div>
        </div>
    );
};

export default PricingCard;