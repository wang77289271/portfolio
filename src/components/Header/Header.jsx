import './Header.css'
import headerImg from '../assets/portfolio-header.png'
import SolidBtn from '../UI/button/SolidBtn'
import OutlinedBtn from '../UI/button/OutlinedBtn'

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_container_wrapper">
        <div className="header_info">
          <div className="header_img">
            <img src={headerImg} alt="Hello, I'm Ye Wang" />
          </div>
          <div className="header_content">
            <h4>Hello, I'm</h4>
            <h2>Ye (Shawn) Wang</h2>
            <h3>Front-end Developer, Designer</h3>
          </div>
        </div>
        <div className="header_btn">
          <SolidBtn className="header_btn_left">
            <a href="#about">About me</a>
          </SolidBtn>
          <OutlinedBtn className="header_btn_right">
            <a href="#contact">Contact Me</a>
          </OutlinedBtn>
        </div>
      </div>
    </div>
  )
}

export default Header
