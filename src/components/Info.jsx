import React from 'react'

export const Info = ({infoBar, setInfoBar, title, date, description}) => {
  let classN = "info-main"
  const handleCloseInfo = () => {
    classN = "active"
    setInfoBar(false)
    
  }
  
  return (
    <div className={`info-main ${infoBar ? "showleft" : "showright"}`}>
      <div>
        <div className="sidebar">
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{description}</p>
        </div>
        <button onClick={handleCloseInfo}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>
  )
}
