import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOption = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center bg-gradient-to-r from-amber-50 via-amber-300 to-amber-900 bg-clip-text text-transparent mb-5'>Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 h-fit shadow-xl'>
                {pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)}
                {/* {
                    pricingData.map(pricing => <DaisyCard
                        key={pricing.id}
                        pricing={pricing}
                    ></DaisyCard>)
                } */}
            </div>
        </div>
    );
};

export default PricingOption;