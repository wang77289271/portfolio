import React, { useEffect, useState } from 'react'
import './Timeline.css'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined'
import WorkExp from './WorkExp/WorkExp'

const workExp_url = 'https://findyewang.com/profileData/resumeWorkExp.php'

const Timeline = () => {
  const [workExp, setWorkExp] = useState([])

  useEffect(() => {
    const getWorkExp = async () => {
      const res = await fetch(workExp_url)
      const workExp = await res.json()
      setWorkExp(workExp)
    }
    getWorkExp()
  }, [])
  console.log(workExp)

  return (
    <div className="timeline_container">
      <div className="timeline">
        <ul>
          {/* ----------- about me -----------  */}
          <li className="aboutme">
            <div
              className="dot"
              style={{ borderColor: '#f16521', right: '-37px' }}
            />
            <div className="timeline_content">
              <h1>Hello,</h1>
              <span style={{ backgroundColor: '#f16521' }} />
              <div className="timeline_content_detail">
                <p>
                  I am a creative front-end developer with 4+ years of
                  experience. Skilled in designing, developing and testing
                  multiple web-based application.
                </p>
                <p
                  style={{
                    marginTop: '1rem',
                  }}
                >
                  I am organized and detail-oriented, work well under pressure
                  and deadlines, enjoy working with a variety of people, and
                  have a great attitude of always striving for the best.
                </p>
              </div>
            </div>
          </li>
          {/* ----------- End about me -----------  */}

          {/* ----------- Skills -----------  */}
          <li className="skills">
            <div
              className="dot"
              style={{ borderColor: '#25a8d7', left: '-37px' }}
            />
            <div className="timeline_content">
              <h1>My skills</h1>
              <span style={{ backgroundColor: '#25a8d7' }} />
              <div className="timeline_content_detail">
                <div className="timeline_content_skills">
                  <div className="skill_icon">
                    <h3>&lt;/&gt;</h3>
                  </div>
                  <div className="skill_right">
                    <h5>HTML, CSS, JavaScript, React, WordPress</h5>
                    <h5>Material UI, Nodejs, Bootstrap</h5>
                  </div>
                </div>
                <hr />
                <div className="timeline_content_skills ">
                  <div className="skill_icon">
                    <DesignServicesOutlinedIcon
                      style={{ color: 'rgb(193, 84, 218)', fontSize: '3.5rem' }}
                    />
                  </div>
                  <div className="skill_right">
                    <h5>UX/UI, Web/Graphic Design</h5>
                    <h5>
                      Adobe Suite (Photoshop,Illustrator, Premiere Pro, Adobe
                      Acrobat, InDesign, etc.)
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* ----------- End Skills -----------  */}

          {/* ----------- Education -----------  */}
          <li className="education">
            <div
              className="dot"
              style={{ borderColor: '#1cb58f', right: '-37px' }}
            />
            <div className="timeline_content">
              <h1>Education</h1>
              <span style={{ backgroundColor: '#1cb58f' }} />
              <div className="timeline_content_detail">
                <div className="timeline_content_edu">
                  <h2>Master of Science in Multimedia</h2>
                  <h3>University of Alberta, Edmonton, Alberta</h3>
                  <p>September 2015 – June 2017</p>
                </div>
                <div className="timeline_content_edu">
                  <h2>Post-diploma in Interactive Media Management</h2>
                  <h3>Algonquin College, Ottawa, Ontario</h3>
                  <p>September 2014 – April 2015</p>
                </div>
                <div className="timeline_content_edu">
                  <h2>Bachelor of Arts in Film and Television Directing</h2>
                  <h3>Qingdao Agriculture University, Qingdao, China</h3>
                  <p>September 2009 – July 2013</p>
                </div>
              </div>
            </div>
          </li>
          {/* ----------- End Education -----------  */}

          {/* ----------- Work Epx -----------  */}
          <li className="workEpx">
            <div
              className="dot"
              style={{ borderColor: '#f7ce01', left: '-37px' }}
            />
            <div className="timeline_content">
              <h1>Work Experience</h1>
              <span style={{ backgroundColor: '#f7ce01', width: '35%' }} />
              <div className="timeline_content_detail">
                {workExp.map((workExp) => (
                  <WorkExp workExp={workExp} />
                ))}
              </div>
            </div>
          </li>
          {/* ----------- End Work Exp -----------  */}
        </ul>
      </div>
    </div>
  )
}

export default Timeline
