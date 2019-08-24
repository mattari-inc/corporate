require('./bulma')
import React from 'react'
import ReactDOM from 'react-dom'
import Hotel from './hotel'

document.addEventListener('DOMContentLoaded', () => {
  const hotelContent = document.querySelector('.content-hotel')
  if (hotelContent) {
    ReactDOM.render(<Hotel />, hotelContent)
  }
})