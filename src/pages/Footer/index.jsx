import React from 'react'
import './index.css'
import physics from '../../static/images/physics.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <h3>
        Welcome to Watanabe Group
      </h3>
      <a href="http://physics.zju.edu.cn/">
        <img src={physics} alt="school of physics" />
      </a>
    </footer>
  )
}
