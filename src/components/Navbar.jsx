import React, { useState } from 'react';
import productsData from '../../allproducts.json'; // Update the path to your products.json file

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  const filterProducts = () => {
    if (!searchTerm.trim()) {
      setFilteredProducts([]); // Show nothing when no search term
      return;
    }
    const filtered = Object.values(productsData).flatMap((category) =>
      category.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    filterProducts();
  };

  return (
    <>
      <div className="navbar bg-base-100 px-1 lg:px-32 pb-0 lg:pb-8">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost normal-case text-xl">Only Fayans</a>
  </div>
  <a className='hover:underline' href="/catalogue">Katalog</a>

  <div className="flex-none">
  <div className={`dropdown dropdown-end ${isDropdownOpen ? 'open' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <label tabIndex={0} className="btn btn-ghost btn-circle" >
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

            </label>

            <div
              tabIndex={0}
              className={`mt-3 z-[1] card card-compact dropdown-content w-52 lg:w-96 bg-base-100 shadow`}
            >
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Ürün Ara"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <ul className='grid grid-cols-3 gap-4'>
                  {filteredProducts.map((product, index) => (
                    <li key={index}>
                      <img src={product.image} alt={product.title} />
                      <div className='grid grid-cols-1'>
                        <span className="font-bold">{product.title}</span>
                        <span className="text-info">
                          Fiyat: {product.price}₺
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                {filteredProducts.length === 0 && (
                  <p>Aranılan nitelikte ürün bulunamadı.</p>
                )}
              </div>
            </div>
          </div>
    <div className="dropdown dropdown-end">
        
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/src/assets/images/Screenshot 2023-09-04 141004.png" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar