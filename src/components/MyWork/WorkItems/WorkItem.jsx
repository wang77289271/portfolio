import React from 'react'
import './WorkItem.css'

const WorkItem = ({ project }) => {
  const { title, des, url, github_url, img } = project
  return (
    <div className="work_item">
      <div className="work_item_container">
        <img src={img} alt={title} />
        <div className="work_item_detail">
          <p>{des}</p>
          <div className="work_item_btn">
            <a href={github_url} target="_blank" rel="noreferrer">
              Github
            </a>
            <a href={url} target="_blank" rel="noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
