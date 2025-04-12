import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature }) => {
    return (

        <p className='flex gap-2 mb-2'><CircleCheckBig className='text-green-400'></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeature;