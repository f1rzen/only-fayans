import React, { useState, useEffect } from 'react';
import productsData from '../../allproducts.json'; // Update the path to your products.json file
import { auth, googleAuthProvider } from '../fireBase';

const Navbar = () => {
  const [user, setUser] = useState(null); // Add a user state variable
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(null);

  useEffect(() => {
    // Check the user's authentication status
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setIsUserAuthenticated(true);
        setUser(authUser); // Set the user state with the authenticated user
      } else {
        // User is signed out
        setIsUserAuthenticated(false);
        setUser(null); // Reset the user state
      }
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGoogleSignIn = () => {
    if (isUserAuthenticated === false) {
      auth
        .signInWithPopup(googleAuthProvider)
        .then((result) => {
          // Handle successful sign-in here
          const authUser = result.user;
          console.log('User signed in:', authUser);
          setUser(authUser); // Set the user state with the authenticated user
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error signing in:', error);
        });
    }
  };

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

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Handle successful sign-out here
        console.log('User signed out');
        setUser(null); // Reset the user state
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error signing out:', error);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100 px-1 lg:px-32 pb-0 lg:pb-8">
        <div className="flex-1">
          <a href="/">
            <h1 className="hidden">Only Fayans</h1>
            <img
              src="../assets/images/oflogo.png"
              className="btn btn-ghost normal-case text-xl pb-1"
            />
          </a>
        </div>
        <a className="hover:underline" href="/catalogue">
          Katalog
        </a>

        <div
          className={`dropdown dropdown-end ${isDropdownOpen ? 'open' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 lg:w-96 bg-base-100 shadow"
          >
            <div className="card-body">
              <input
                type="text"
                placeholder="Ürün Ara"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <ul className="grid grid-cols-3 gap-4">
                {filteredProducts.map((product, index) => (
                  <li key={index}>
                    <img src={product.image} alt={product.title} />
                    <div className="grid grid-cols-1">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
            onClick={handleGoogleSignIn}
          >
            <div className="w-10 rounded-full">
              {isUserAuthenticated && user ? (
                <img src={user.photoURL} alt={user.displayName} />
              ) : (
                /* Render your blank avatar */
                <img src="../assets/images/blank-avatar.webp" alt="Blank Avatar" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              
              {isUserAuthenticated && user ? (
                <a className="text-xl">
                  {user.displayName}
                </a>
              ) : (
                /* Render your blank avatar */
                <a>Merhaba</a>
              )}
                
            </li>
            <li>
            {isUserAuthenticated && user ? (
                <a className="justify-between">
                  {user.email}
                </a>
              ) : (
                /* Render your blank avatar */
                <a>Lütfen Giriş Yapın</a>
              )}
            </li>
            <li>
              <a className='flex items-center align-middle' onClick={handleSignOut}>Çıkış <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
