import { useState } from 'react'
import './App.css'
import Stats from './components/Stats'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
