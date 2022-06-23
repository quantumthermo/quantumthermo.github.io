import React from 'react'
import './index.css'
import physics from '../../static/physics.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <a href="http://physics.zju.edu.cn/">
        <img src={physics} alt="school of physics" />
      </a>
      <h3>
        Welcome to Watanabe Group
      </h3>
    </footer>
  )
}
