import React, { useRef, useState } from 'react'
import './WorkExp.css'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const WorkExp = ({ workExp }) => {
  const [isOpen, setIsOpen] = useState(false)
  const workExpRef = useRef()
  const { company, title, period, details } = workExp

  return (
    <div className="timeline_content_workExp">
      <div
        className="workExp_head"
        onClick={() => setIsOpen(!isOpen)}
        style={
          isOpen
            ? { backgroundColor: '#378cd7', color: '#fff' }
            : { color: '#000' }
        }
      >
        <div className="workExp_head_info">
          <h2>{title}</h2>
          <div className="workExp_company_time">
            <h3>{company}</h3>
            <h4>{period}</h4>
          </div>
        </div>
        <div
          className="workExp_head_onoff"
          style={
            isOpen
              ? { transform: 'rotate(180deg)' }
              : { transform: 'rotate(0)' }
          }
        >
          {isOpen ? (
            <RemoveIcon
              style={{
                color: '#fff',
              }}
            />
          ) : (
            <AddIcon
              style={{
                borderRadius: '50%',
                backgroundColor: '#378cd7',
                color: '#fff',
              }}
            />
          )}
        </div>
      </div>
      <div
        className="workExp_details"
        ref={workExpRef}
        style={
          isOpen
            ? {
                height: workExpRef.current.scrollHeight,
                borderStyle: 'solid',
                borderColor: '#378cd7',
                borderWidth: '0 2px 2px 2px',
              }
            : { height: '0px', border: '0px' }
        }
      >
        {details.split('/').map((detail, index) => (
          <p key={index}>• {detail}</p>
        ))}
      </div>
    </div>
  )
}

export default WorkExp
