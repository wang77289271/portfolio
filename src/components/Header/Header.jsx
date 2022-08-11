import './Header.css'
import headerImg from '../../assets/portfolio-header.png'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_container_wrapper">
        <div className="header_info">
          <div className="header_content">
            <h3>Front-end Developer, Designer</h3>
            <h4>I love to code because it is fun.</h4>
          </div>
          <div className="header_img">
            <img src={headerImg} alt="Hello, I'm Ye Wang" />
          </div>
        </div>
        <div className="header_btn">
          <div className="floating_btn">
            <a href="#about">
              <KeyboardDoubleArrowDownIcon
                style={{
                  fontSize: '46px',
                  fill: '#141c3a',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
