import React from 'react'
import img from  './404.png'

const Error = () => {
  return (
    <div>
      <img style={{height: "100vh", width: "100vh"}} src={img} alt="404 not found" />
    </div>
  )
}

export default Error
