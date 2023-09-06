import React, { useState, useEffect } from 'react';
import './App.css'
import Stats from './components/Stats'
import Product from './components/Product'
import productData from '../products.json';
import Alert from './components/Alert';


function App() {
  const [count, setCount] = useState(0)
  const products = productData.products;
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  useEffect(() => {
    // Use useEffect to automatically hide the alert after a certain duration
    if (showAlert) {
      const alertTimeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Adjust the duration (in milliseconds) as needed, e.g., 3000ms = 3 seconds

      // Clear the timeout if the component unmounts or if showAlert is toggled off before the timer expires
      return () => clearTimeout(alertTimeout);
    }
  }, [showAlert]);

  return (
    <>
      <div className="hero bg-base-200 mt-32">
  <div className="hero-content flex-col lg:flex-row ">
    <img src="/src/assets/images/71JaoH-PIWL._AC_UF1000,1000_QL80_.jpg" className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Evinizin Döşemelerine Zarafet Katın</h1>
      <p className="py-6">Fayansın özgün dokusu ve dayanıklılığı ile yaşam alanlarınızı yeniden keşfedin. Evinizi güzelleştirmek için mükemmel fayans seçenekleri sunuyoruz. Kalite, estetik ve dayanıklılığı bir araya getirerek, hayalinizdeki yaşam alanını oluşturmanıza yardımcı oluyoruz.</p>
      <button className="btn btn-primary">Hemen Keşfet!</button>
    </div>
  </div>
</div>
    <h2 className='text-4xl font-bold wrapper mt-32'>Müşteri Memnuniyetimiz</h2>
    <Stats/>
    
    <h2 className='text-4xl font-bold wrapper headercon mt-32'>Yeni Gelenler 👇</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
    {products.map((product, index) => (
          <Product key={index} data={product} toggleAlert={toggleAlert}/>
        ))}
    </div>
    {showAlert && <Alert  />}
    </>
  )
}

export default App
