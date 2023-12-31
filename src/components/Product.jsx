import React from 'react'


const Product = (props) => {
  const { title, image, desc, price } = props.data;
  const handleAddToCart = () => {
    // Add your logic to add the product to the cart here
    // For this example, we'll just show the alert
    props.toggleAlert(); // Call the toggleAlert function from props
  };
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="fayans" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <p>Fiyat: {price}₺</p>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <div className="card-actions">
      <button className="btn btn-primary mt-4" onClick={handleAddToCart}>Sepete Ekle</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Product