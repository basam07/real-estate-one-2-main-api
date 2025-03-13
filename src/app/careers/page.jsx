import React from 'react'
import CareersHeroSec from "@/featured/careers/careers-hero-sec";
import CareersSecTwo from "@/featured/careers/careers-sec-two";
import AboutSecThree from "@/featured/about/about-sec-three";
import CareersSecThree from "@/featured/careers/careers-sec-three";
import CareersSecFour from "@/featured/careers/careers-sec-four";
import CarrerSecSeven from '@/featured/careers/career-sec-seven';
import CareerSecEight from '@/featured/careers/career-sec-eight'
import CarrerSecNine from '@/featured/careers/carrer-sec-nine';
import { fetchAllCareerDescriptions } from '../../../server/career-description/career_descriptions';
import { fetchAllCareerRealinvte } from '../../../server/career-realivte/career_realinvte';
import { fetchAllexperience } from '../../../server/experience/experiences';
import { fetchAllExpectations } from '../../../server/expections/expectations';
import { fetchAllCoreValues } from '../../../server/our-core-value/our_core_value';
import { fetchAllApplies } from '../../../server/apply/apply';

const page = async ({params}) => {
  const careerDescriptions = await getAllCareer(params.slug);
  const careerRealinvte = await getAllCareerRealinvte(params.slug);
  const experience = await getAllExperience(params.slug);
  const expectations = await getAllExpectation(params.slug);
  const coreValues = await getAllCoreValues(params.slug);
  const applies = await getAllApply(params.slug);
  // console.log(expectations);

  return (
    <>
        <CareersHeroSec />
        <CareersSecTwo careerDescriptions={careerDescriptions} />
        <CareersSecThree careerRealinvte={careerRealinvte} />
        <AboutSecThree coreValues={coreValues} />
        <CareersSecFour experience={experience}/>
        <CarrerSecSeven expectations={expectations}/>
        <CareerSecEight applies={applies}/>
        <CarrerSecNine/>
    </>
  )
}

export default page;

async function getAllCareer(slug) {
  return fetchAllCareerDescriptions(slug);
}

async function getAllCareerRealinvte(slug) {
  return fetchAllCareerRealinvte(slug);
}


async function getAllExperience(slug) {
  return fetchAllexperience(slug);
}

async function getAllExpectation(slug) {
  return fetchAllExpectations(slug);
}

async function getAllCoreValues(slug) {
  return fetchAllCoreValues(slug);
}

async function getAllApply(slug) {
  return fetchAllApplies(slug);
}
