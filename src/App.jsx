import { useState } from 'react'
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
  return (
    <>
      <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="src/assets/images/fayansci.png" className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Evinizin Döşemelerine Zarafet Katın</h1>
      <p className="py-6">Fayansın özgün dokusu ve dayanıklılığı ile yaşam alanlarınızı yeniden keşfedin. Evinizi güzelleştirmek için mükemmel fayans seçenekleri sunuyoruz. Kalite, estetik ve dayanıklılığı bir araya getirerek, hayalinizdeki yaşam alanını oluşturmanıza yardımcı oluyoruz.</p>
      <button className="btn btn-primary">Hemen Keşfet!</button>
    </div>
  </div>
</div>
    <h2 className='text-4xl font-bold wrapper'>Müşteri Memnuniyetimiz</h2>
    <Stats/>
    
    <h2 className='text-4xl font-bold wrapper headercon'>Yeni Gelenler</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {products.map((product, index) => (
          <Product key={index} data={product} toggleAlert={toggleAlert}/>
        ))}
    </div>
    {showAlert && <Alert />}
    </>
  )
}

export default App
