import React, { useState, useEffect } from 'react'
import openings from '../../../static/information/openings'
import './index.css'
export default function Openings() {

  const [opens, setOpens] = useState(openings);

  useEffect(() => {
    fetch('https://oldfish1996.github.io/quantumthermo-data/opennings.json')
    .then(res => res.json())
    .then(json => {
      const {openings: fecthOpenings} = json;
      setOpens(fecthOpenings)
      // console.log(fecthOpenings);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  const {postdoctoral_positions, graduate_students} = opens;

  return (
    <section className='openings'>
      <p className='nav-item-title'>OPENINGS</p>
      <p className='kind-title'>Postdoctoral Positions</p>
      {
        postdoctoral_positions.map(p=><p className='paragraph' key={p.id}>{p.content.replace(/\r|\n/ig,"")}</p>)
      }
      <p className='kind-title'>Graduate Students</p>
      {
        graduate_students.map(p=><p className='paragraph' key={p.id}>{p.content.replace(/\r|\n/ig,"")}</p>)
      }
    </section>
  )
}
