import React from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Heading } from '../Components/Heading'
import { AboutListox } from '../AboutComponents/AboutListox'
import { AboutLocal } from '../AboutComponents/AboutLocal'
import { AboutDestination } from '../AboutComponents/AboutDestination'
import { Team } from '../AboutComponents/Team'

export const About = () => {

    return (
        <div className="flex flex-col rounded-4xl m-5">
            <PageBanner />
            <AboutListox />
            <AboutLocal />
            <AboutDestination />
            <Team />

        </div>
    )
}
