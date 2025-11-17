import React from 'react'
import { HeroSection } from '../HomeComponents/HeroSection'
import { Categories } from '../HomeComponents/Categories'
import { Welcome } from '../HomeComponents/Welcome'
import { LocalBusinesses } from '../HomeComponents/LocalBusinesses'
import { Destination } from '../HomeComponents/Destination'
import { LocalBusinessesTwo } from '../HomeComponents/LocalBusinessesTwo'
import { UpcomingEvents } from '../HomeComponents/UpcomingEvents'
import { SpecialOffer } from '../HomeComponents/SpecialOffer'
import { DownloadApp } from '../HomeComponents/DownloadApp'
import { DestinationTwo } from '../HomeComponents/DestinationTwo'
import { Blogs } from '../HomeComponents/Blogs'

export const Home = () => {
    return (
        <>
            <HeroSection />
            <Categories />
            <Welcome />
            <LocalBusinesses />
            <Destination />
            <LocalBusinessesTwo />
            <UpcomingEvents />
            <SpecialOffer />
            <DestinationTwo />
            <Blogs />

        </>
    )
}
