import React from 'react'
import Paper from '../../../components/Paper'
import publication from '../../../static/information/publication'
import './index.css'

export default function Publications() {
  const { representative, submitted, recent } = publication
  console.log(representative, submitted, recent);
  return (
    <section className='publications'>
      <p className='publications-title'>PUBLICATIONS</p>
      <p className='publications-kind'>Representive Papers</p>
      <ul>
        {representative.map(paper => <Paper key={paper.id} {...paper} />)}
      </ul>
      <hr />
      <p className='publications-kind'>Submitted Papers</p>
      <p>To Be Completed...</p>
      <ul>
        {submitted.map(paper => <Paper key={paper.id} {...paper} />)}
      </ul>
      <hr />
      <p className='publications-kind'>Recent Papers</p>
      <p>To Be Completed...</p>
      <ul>
        {recent.map(paper => <Paper key={paper.id} {...paper} />)}
      </ul>
    </section>
  )
}
