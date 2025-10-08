import React from 'react'
import ReactDOM from 'react-dom'

function Portaldemo() {
  return ReactDOM.createPortal(
    <h1 style={{ color: 'black' }}>Welcome to IT-2 (Rendered via Portal)</h1>,
    document.getElementById('cbit-root')
  )
}

export default Portaldemo
