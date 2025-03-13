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

const page = async () => {
  const careerDescriptions = await getAllCareer();
  const careerRealinvte = await getAllCareerRealinvte();
  const experience = await getAllExperience();
  const expectations = await getAllExpectation();
  const coreValues = await getAllCoreValues();
  const applies = await getAllApply();
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

async function getAllCareer() {
  return fetchAllCareerDescriptions();
}

async function getAllCareerRealinvte() {
  return fetchAllCareerRealinvte();
}


async function getAllExperience() {
  return fetchAllexperience();
}

async function getAllExpectation() {
  return fetchAllExpectations();
}

async function getAllCoreValues() {
  return fetchAllCoreValues();
}

async function getAllApply() {
  return fetchAllApplies();
}
