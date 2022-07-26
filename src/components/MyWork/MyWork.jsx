import React from 'react'
import './MyWork.css'
import WorkItem from './WorkItems/WorkItem'
import { myWorks } from '../../data'

const MyWork = () => {
  console.log(myWorks)
  return (
    <div className="myWork">
      <div className="myWork_wrapper">
        <div className="myWork_title">
          <h1>My Resent Works</h1>
          <p>Here are some project I have built.</p>
        </div>
        <div className="myWork_items">
          {myWorks.map((item, index) => (
            <div className="myWork_item" key={index}>
              <WorkItem project={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWork
