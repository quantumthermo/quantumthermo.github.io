import React from 'react'
import openings from '../../../static/information/openings'
import './index.css'
export default function Openings() {
  const {postdoctoral_positions, graduate_students} = openings
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
