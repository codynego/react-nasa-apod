import React from 'react'

export const Footer = ({setInfoBar, title}) => {

  const handleOpenInfo = () => {
    setInfoBar(true)
  }
  return (
    <footer>
        <div>
            <p>Nasa APOD</p>
            <h1>{title}</h1>
        </div>
        <button onClick={handleOpenInfo}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>

  )
}
