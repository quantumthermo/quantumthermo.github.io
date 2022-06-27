import React from 'react'
import Paper from '../../../components/Paper'
import publication from '../../../static/information/publication'
import './index.css'

export default function Publications() {
  const { representative, submitted, recent } = publication
  // console.log(representative, submitted, recent);
  return (
    <section className='publications'>
      <p className='nav-item-title'>PUBLICATIONS</p>
      <p className='kind-title'>Representive Papers</p>
      <ul>
        {representative.map((paper,index) => <Paper key={paper.id} {...paper} index={index}/>)}
      </ul>
      <hr />
      <p className='kind-title'>Submitted Papers</p>
      <p>To Be Completed...</p>
      <ul>
        {submitted.map(paper => <Paper key={paper.id} {...paper} />)}
      </ul>
      <hr />
      <p className='kind-title'>Recent Papers</p>
      <p>To Be Completed...</p>
      <ul>
        {recent.map(paper => <Paper key={paper.id} {...paper} />)}
      </ul>
    </section>
  )
}
