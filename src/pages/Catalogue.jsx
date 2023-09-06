import React from 'react'
import CatalogueCard from '../components/CatalogueCard'
import productData from '../../allproducts.json'

const Catalogue = () => {
  const miniworx = productData.miniworx;
  const procolor = productData.procolor;
  const retromix = productData.retromix;
  return (
    <div className='mt-16'>
        <h1 className='text-6xl pb-16'>Katalog</h1>
        <h2 className='text-3xl flex justify-start underline'>Retromix</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 my-16 gap-y-8 lg:gap-y-16'>
        {retromix.map((retromix, index) => (
          <CatalogueCard key={index} data={retromix}/>
        ))}
        </div>
        <h2 className='text-3xl flex justify-start underline'>Miniworx</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 my-16 gap-y-8 lg:gap-y-16'>
        {miniworx.map((miniworx, index) => (
          <CatalogueCard key={index} data={miniworx}/>
        ))}
        </div>
        <h2 className='text-3xl flex justify-start underline'>Pro Color</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 my-16 gap-y-8 lg:gap-y-16'>
        {procolor.map((procolor, index) => (
          <CatalogueCard key={index} data={procolor}/>
        ))}
        </div>
    </div>
  )
}

export default Catalogue