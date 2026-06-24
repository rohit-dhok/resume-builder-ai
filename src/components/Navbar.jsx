import React from 'react'

function Navbar({handlePrint}) {
  return (
    <nav>
        <h2>resumo</h2>
        <button onClick={handlePrint}>Download PDF</button>
    </nav>
  )
}

export default Navbar