import React from 'react'
import PropertiesHero from '@/featured/properties/properties-hero'
import PropertiesSecTwo from '@/featured/properties/properties-sec-two'
import { fetchProperty } from '../../../../server/properties/properties';

const Page = async ({ params }) => {

    // console.log('param slug data',params)
    const { slug } = await params;
    const property = await getProperties(slug);

    return (
        <div>
            {/* <PropertiesHero property={property} /> */}
            <PropertiesSecTwo property={property} />
        </div>
    );
};

export default Page;

export async function getProperties(slug) {
    return fetchProperty(slug);
}
