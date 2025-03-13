import React from 'react'
import { createService } from '../../../../../../server/services/services'
import FormTwo from '@/featured/Form/insights/form-two'


 export default async function page ({params}) {
    const data = await getServices(params.slug)
  return (
    <div>
        <FormTwo formData={data}/>
    </div>
  )
 }

async function getServices(slug){
    return createService(slug);
}