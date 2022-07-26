import ymovieImg from '../src/components/assets/work_item_ymovie.jpg'
import dota2 from '../src/components/assets/work_item_dota2.jpg'
import portfolio from '../src/components/assets/portfolio-header.png'

export const myWorks = [
  {
    title: 'yMovie',
    skills: 'React, HTML, CSS',
    des: 'Using "The Movie Database API"',
    url: 'http://ymovie.findyewang.com/',
    github_url: 'https://github.com/wang77289271/movie-app',
    img: `${ymovieImg}`,
    bg_color: '#3b68d0',
  },
  {
    title: 'Dota 2',
    skills: 'React, Styled-components',
    des: 'website front page clone',
    url: 'https://dota-2-clone.netlify.app/',
    github_url: 'https://github.com/wang77289271/movie-app',
    img: `${dota2}`,
    bg_color: '#3bc4d0',
  },
  {
    title: 'Portfolio',
    skills: 'JS, React, Web Design',
    des: 'My Portfolio website',
    url: '#home',
    github_url: 'https://github.com/wang77289271/portfolio',
    img: `${portfolio}`,
    bg_color: '#d07d3b',
  },
]
