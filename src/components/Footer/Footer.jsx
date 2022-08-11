import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_list">
          <a href="#home">
            <LinkedInIcon
              className="footer_icon"
              style={{
                fontSize: '50px',
                fill: '#ffffff',
              }}
            />
          </a>
        </div>
        <div className="footer_list">
          <a href="#about">
            <GitHubIcon
              className="footer_icon"
              style={{
                fontSize: '50px',
                fill: '#ffffff',
              }}
            />
          </a>
        </div>
      </div>
      <div className="footer_sentence">
        <h1>Learning never exhausts the mind.</h1>
      </div>
      <div className="footer_copyright">
        <hr />
        <h1>findyewang.com | All right reserved </h1>
      </div>
    </div>
  )
}

export default Footer
