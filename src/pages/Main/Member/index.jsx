import React, { useEffect, useState } from 'react'
import mentorAvatar from '../../../static/images/mentor-avatar.jpg'
import emailImg from '../../../static/images/youxiang.svg'
import stuImg from '../../../static/images/xuesheng.svg'
import members from '../../../static/information/member'
import './index.css'

export default function Member() {

  const [people, setPeople] = useState(members);

  useEffect(() => {
    fetch('https://oldfish1996.github.io/quantumthermo-data/members.json')
    .then(res => res.json())
    .then(json => {
      const {members: fecthMembers} = json;
      setPeople(fecthMembers)
      // console.log(fecthMembers);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <>
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
            <div className='leader-contact'>
              <div>Contact:</div> 
              <div className='email'>
                <img className='email-img' src={ emailImg } alt="email" />
                <span>gentaro@zju.edu.cn</span>
              </div> 
            </div>
          </article>
        </div>
        <h2 className='outline'>
          <span>Group Members</span>
        </h2>
        <div className='group-members'>
          { people.map(({name, status, email}) => (
            <div className='member-item' key={name}>
              <h2 className='member-name'>{name}</h2>
              <div className='info'>
                <div className='status'>
                <img className='stu-img' src={ stuImg } alt="email" />
                  <span>{status}</span>
                  </div>
                {email && 
                <div className='email'>
                  <img className='email-img' src={ emailImg } alt="email" />
                  <span>{email}</span>
                </div>}
              </div>
            </div>
          )) }
        </div>
      </section>
    </>
  )
}
