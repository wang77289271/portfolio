import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_list">
          <a
            href="https://github.com/wang77289271"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              className="footer_icon"
              style={{
                fontSize: '50px',
                fill: '#ffffff',
              }}
            />
          </a>
        </div>
        <div className="footer_list">
          <a
            href="https://www.linkedin.com/in/ye-wang-1a8392b4/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
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
