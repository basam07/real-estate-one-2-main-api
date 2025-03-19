import React from 'react'
import PropertiesHero from '@/featured/properties/properties-hero'
import PropertiesSecTwo from '@/featured/properties/properties-sec-two'
import { fetchProperty } from '../../../../server/properties/properties';

const Page = async ({ params }) => {
    if (!params || !params.slug) {
        return <div>Loading...</div>; // Handle the case where params are not yet available
    }

    const property = await getProperties(params.slug);

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
