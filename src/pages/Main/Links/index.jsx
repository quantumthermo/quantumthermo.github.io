import React, { useEffect, useState } from 'react';
import links from '../../../static/information/links';
import './index.css';

export default function Links() {

  const [lks, setLks] = useState(links);

  useEffect(() => {
    fetch('https://oldfish1996.github.io/quantumthermo-data/links.json')
    .then(res => res.json())
    .then(json => {
      const {links: fecthLink} = json;
      setLks(fecthLink)
      console.log(fecthLink);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);


  return (
    <section className='links'>
      <p className='nav-item-title'>LINKS</p>
      <div className='links-content'>
        <ul>
          {
            lks.map((li, idx) => (
              <li key={idx+li.id}>
                <a rel="noreferrer" target="_blank" href={li.url}>
                  {li.content}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
