import React from 'react'

const Stats = () => {
  return (
    <>
    <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Satışlar</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">1 Ocak - 6 Eylül</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Yeni Müşteri</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Ürün Yelpazesi</div>
    <div className="stat-value">1,200+</div>
    <div className="stat-desc">Vitra, Ege Seramik</div>
  </div>
  
</div>
    </>
  )
}

export default Stats