import React from 'react'

const Card = () => {
  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src="https://cdn.britannica.com/85/128585-050-5A1BDD02/Karachi-Pakistan.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card
