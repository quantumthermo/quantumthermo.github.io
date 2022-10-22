import React from 'react'
import { useRoutes, NavLink } from 'react-router-dom'
import routes from '../../routes'
import './index.css'

export default function Main() {
  const element = useRoutes(routes)
  // const location = useLocation()
  // console.log(location);
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <main>
      <section className='header-info'>
        <h1 id="title" className='title'>Gentaro Watanabe group</h1>
        <nav>
          <ul className="nav">
            <li><NavLink className='nav-item' to='/home'>HOME</NavLink></li>
            <li><NavLink className='nav-item' to='/research'>RESEARCH</NavLink></li>
            <li><NavLink className='nav-item' to='/member'>MEMBER</NavLink></li>
            <li><NavLink className='nav-item' to='/publications'>PUBLICATIONS</NavLink></li>
            <li><NavLink className='nav-item' to='/openings'>OPENINGS</NavLink></li>
            <li><NavLink className='nav-item' to='/links'>LINKS</NavLink></li>
          </ul>
        </nav>
      </section>
      {/* 路由展示区域 */}
      {element}
    </main>
  )
}
