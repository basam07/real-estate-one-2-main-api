import React from 'react'
import Abouthero from '@/featured/about/about-hero-sec'
import AboutSecTwo from '@/featured/about/about-sec-two'
import AboutSecThree from '@/featured/about/about-sec-three'
import AboutSecFour from '@/featured/about/about-sec-four'
import AboutSecFive from '@/featured/about/about-sec-five'
import HomeSecSix from "@/featured/home/home-section-six";
import { fetchAllCoreValues } from '../../../server/our-core-value/our_core_value'
const page = async ({params}) => {
  const coreValues = await getAllCoreValues(params.slug);
  return (
    <div>
        <Abouthero/>
        <AboutSecTwo/>
        <AboutSecThree coreValues={coreValues}/>
        <AboutSecFour/>
        <AboutSecFive/>
        <HomeSecSix/>
    </div>
  )
}

export default page

async function getAllCoreValues(slug) {
  return fetchAllCoreValues(slug);
}