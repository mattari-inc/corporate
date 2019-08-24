import React from 'react';

class Hotel extends React.Component {
  render() {
    const hotels = require('../data/hotel.json')
    const hotelElements = hotels.map((hotel, index) => {
      return(
        <a href={hotel.url} className="column" target="_blank" key={index}>
          <div className="card mg5tb">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={hotel.image} alt={hotel.name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">{hotel.name}</p>
                <p>¥{hotel.price}</p>
                <p>{hotel.description}</p>
              </div>
            </div>
          </div>
        </a>
      )
    })
    return(
      <div className="columns">{ hotelElements }</div>
    )
  }
}

export default Hotel