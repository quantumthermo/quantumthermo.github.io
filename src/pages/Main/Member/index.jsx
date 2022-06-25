import React from 'react'
import mentorAvatar from '../../../static/images/mentor-avatar.jpg'
import './index.css'

export default function Member() {
  return (
    <section className='member'>
      <div className="avatar">
        <img src={mentorAvatar} alt="mentor avatar" />
        <h2>GENTARO WATANABE</h2>
      </div>
      <div className='information'>
        <h3>Grop Leader</h3>
        <h3>ZJU 100 Young Professor | Doctoral supervisor</h3>
        <h3>Associate Professor</h3>
        <h3 className='research'>Research
          <ul>
            <li>Thermodynamics of small systems (quantum & classical) and microscopic heat engines</li>
            <li>Theory of ultracold atomic gases</li>
            <li> Quantum control and quantum measurements</li>
          </ul>
        </h3>
      </div>
    </section>
  )
}
