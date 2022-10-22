import React from 'react'
import mentorAvatar from '../../../static/images/mentor-avatar.jpg'
import { members } from '../../../static/information/member'
import './index.css'

export default function Member() {
  return (
    <>
      {/* <p className='nav-item-title'>MEMBER</p> */}
      <section className='member-wrapper'>
        <h2 className='outline'>
          <span>Group Leader</span>
        </h2>
        <div className='leader'>
          <img className="avatar" src={ mentorAvatar } alt=" group leader" />
          <article className='info'>
            <div className='info-piece name'>Gentaro Watanabe</div>
            <div className='info-piece'>ZJU 100 Young Professor | Doctoral supervisor</div>
            <div className='info-piece'>Associate Professor</div>
            <div className='main-research'>
              <span>Main Research Field:</span>
              <div className='filed'>· Thermodynamics of small systems (quantum & classical) and microscopic heat engines</div>
              <div className='filed'>· Theory of ultracold atomic gases</div>
              <div className='filed'>· Quantum control and quantum measurements</div>
            </div>
          </article>
        </div>
        <h2 className='outline'>
          <span>Group Members</span>
        </h2>
        <div className='group-members'>
          { members.map(({name, status, email}) => (
            <div className='member-item' key={name}>
              <h2 className='member-name'>{name}</h2>
              <div className='info'>
                <div className='status'><span>Status: </span>{status}</div>
                {email &&<div className='email'><span>Email: </span>{email}</div>}
              </div>
            </div>
          )) }
        </div>
      </section>
    </>
  )
}
