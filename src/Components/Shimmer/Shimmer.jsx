import React from 'react'
import "../Shimmer/Shimmer.css"
const Shimmer = () => {
  return (
<div className="shimmer-list">

      {Array.from({length:10},(_,index)=>(
         <div key={index}className="shimmer-cards"></div>
      ))}

  </div>
  )
}

export default Shimmer