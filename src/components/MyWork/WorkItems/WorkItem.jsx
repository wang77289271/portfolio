import React from 'react'
import './WorkItem.css'

const WorkItem = ({ project }) => {
  const { title, skills, des, url, github_url, img, bg_color } = project
  return (
    <div className="work_item">
      <div className="work_item_left">
        <div className="work_item_left_content">
          <h1>{title}</h1>
          <h5>{skills}</h5>
          <h5>{des}</h5>
          <div className="work_item_btn">
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div
        className="work_item_right"
        style={{ backgroundColor: `${bg_color}` }}
      >
        <div
          className="work_item_right_img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: '0.7',
          }}
        ></div>
      </div>
    </div>
  )
}

export default WorkItem
