import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_sentence">
        <h1>Learning never exhausts the mind.</h1>
      </div>

      <div className="footer_wrapper">
        <div className="footer_list">
          <a href="#home">Home</a>
        </div>
        <div className="footer_list">
          <a href="#about">About</a>
        </div>
        <div className="footer_list">
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
