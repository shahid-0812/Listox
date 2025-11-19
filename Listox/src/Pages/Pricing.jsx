import React from 'react'
import { PageBanner } from '../Components/PageBanner';
import { Plans } from '../PricingComponents/Plans';
import { Feedback } from '../PricingComponents/Feedback';
import { Benefits } from '../PricingComponents/Benefits';
import { SignUp } from '../Components/SignUp';

export const Pricing = () => {

    return (
        <div>
            <div className='m-5'>
                <PageBanner />
            </div>
            <Plans />
            <Feedback />
            <Benefits />
            <SignUp />
        </div>
    )
}
