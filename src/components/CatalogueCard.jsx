import React from 'react'

const CatalogueCard = (props) => {
    const { title, image, desc, price } = props.data;
  return (
    <>  
        <div className="card w-40 lg:w-64 bg-base-100 shadow-xl">
  <figure className=''><img src={image} alt="tile" /></figure>
  <div className="card-body p-4 lg:p-8">
    <h2 className="card-title">
      {title}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price}₺</div> 
      {/* <div className="badge badge-outline">Products</div> */}
    </div>
  </div>
</div>
    </>
  )
}

export default CatalogueCard