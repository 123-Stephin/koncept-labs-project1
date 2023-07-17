import React from 'react'

function Front() {
  return (
    <div>
      <h1 style={{ justifyContent: 'center', alignItems:"center"}}>This is my Front Page</h1>
      <img src={require("../public/abc.jpg")} alt='nba' />
    </div>
  )
}

export default Front
