import React from 'react'
import './GraphicDesign.css'
import gd_img from '../../assets/industrialFlyer.png'

const GraphicDesign = () => {
  return (
    <div className="gd">
      <div className="gd_wrapper">
        <div className="gd_left">
          <div className="gd_left_img">
            <img src={gd_img} alt="Industrial Flyer" />
          </div>
          <div className="gd_left_content">
            <h2>Industrial</h2>
            <h3>Flyers</h3>
          </div>
        </div>
        <div className="gd_right">
          <div className="gd_right_container">
            <h1>My Graphic Designs</h1>
            <p>
              I create UI elements, and design all digital works
              (advertisements, newsletter templates, promotional materials,
              banners, posters, flyers, brochures, calendars, etc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphicDesign
