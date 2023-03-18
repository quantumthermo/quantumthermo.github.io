import React, {useState, useEffect} from 'react'
import Paper from './components/Paper'
import publications from '../../../static/information/publications'
import './index.css'

export default function Publications() {
  
  const [pubs, setPubs] = useState(publications);
  
  const { representative, submitted, recent } = pubs;

  useEffect(() => {
    fetch('https://oldfish1996.github.io/quantumthermo-data/publications.json')
    .then(res => res.json())
    .then(json => {
      const {publications: fetchPublications} = json;
      console.log(fetchPublications);
      setPubs(fetchPublications)
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);


  return (
    <section className='publications'>
      <p className='nav-item-title'>PUBLICATIONS</p>
      <p className='kind-title'>Representive Papers</p>
      <ul>
        {representative.map((paper,index) => <Paper key={paper.id} {...paper} index={index}/>)}
      </ul>
      <p className='kind-title'>Submitted Papers</p>
      <ul>
        {submitted.map((paper,index) => <Paper key={paper.id} {...paper} index={index}/>)}
      </ul>
      <p className='kind-title'>Recent Papers</p>
      <ul>
        {recent.map((paper,index) => <Paper key={paper.id} {...paper} index={index}/>)}
      </ul>
    </section>
  )
}
