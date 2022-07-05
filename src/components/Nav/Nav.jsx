import { useEffect } from 'react'
import './Nav.css'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const Nav = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    const navLists = Array.from(
      document.querySelectorAll('.nav_container .nav_wrapper .nav_list')
    )

    window.addEventListener('scroll', () => {
      let current = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY > sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })
      navLists.forEach((navList) => {
        navList.classList.remove('active')
        if (navList.classList.contains(current)) {
          navList.classList.add('active')
        }
      })
    })
  }, [])
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <a href="#home">
          <div className="nav_list home active">
            <HomeIcon
              className="home_icon"
              style={{
                fontSize: '2.2rem',
              }}
            />
            <h1>Home</h1>
          </div>
        </a>

        <a href="#about">
          <div className="nav_list about">
            <PersonIcon
              className="home_icon"
              style={{
                fontSize: '2.2rem',
              }}
            />
            <h1>About</h1>
          </div>
        </a>
        <a href="#contact">
          <div className="nav_list contact">
            <EmailOutlinedIcon
              className="home_icon"
              style={{
                fontSize: '2.2rem',
              }}
            />
            <h1>Contact me</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Nav
