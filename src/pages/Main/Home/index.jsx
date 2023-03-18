import React, {useEffect, useState} from 'react'
import HomePic1 from '../../../static/images/home_pic1.jpg'
import recent_news from '../../../static/information/recent_news'
import './index.css'

export default function Home() {

  const [news, setNews] = useState(recent_news);

  useEffect(() => {
    fetch('https://oldfish1996.github.io/quantumthermo-data/recent_news.json')
    .then(res => res.json())
    .then(json => {
      const {recent_news: fecthNews} = json;
      setNews(fecthNews)
      // console.log(fecthNews);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

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
        {
          news.map((item, idx) => (
            <div className='news-item' key={idx}>
              <span>{item.content}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}
