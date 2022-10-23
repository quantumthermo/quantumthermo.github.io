import React from 'react'
import HomePic1 from '../../../static/images/home_pic1.jpg'
import qingzhu from '../../../static/images/qingzhu.png'
import './index.css'

export default function Home() {
  return (
    <section className='home'>
      <p className='nav-item-title'>HOME</p>
      <div className='content'>
        <img src={HomePic1} alt="" />
        <a rel='noreferrer' target='_blank' href='https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.210603'>
          <p className='img-desc'>Gentaro Watanabe, B. Prasanna Venkatesh, Peter Talkner, Myung-Joong Hwang, and Adolfo del Campo</p>
          <p className='img-desc'>Phys. Rev. Lett. <b>124</b>, 210603 (2020).</p>
        </a>
      </div>
      <p className='kind-title'>Recent News</p>
      <div className='news-list'>
        <div className='news-item'>
          <img className='qingzhu-img' src={qingzhu} alt="qingzhu" />
          <span>Chao Jiang (姜超) and Guitao Lyu (吕桂桃) obtained doctorate degrees. Congratulations!</span>
        </div>
      </div>
    </section>
  )
}
