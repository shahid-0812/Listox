import React from 'react'
import { PageBanner } from '../Components/PageBanner';
import { Plans } from '../PricingComponents/Plans';
import { Feedback } from '../PricingComponents/Feedback';
import { Benefits } from '../PricingComponents/Benefits';

export const Pricing = () => {

    return (
        <div>
            <div className='m-5'>
                <PageBanner />
            </div>
            <Plans />
            <Feedback />
            <Benefits />
        </div>
    )
}
