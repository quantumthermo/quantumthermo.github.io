import React from 'react'
import './Paper.css'

export default function Paper({author,title,magzine,magzineUrl,arXiv,arXivUrl}) {
  return (
    <li>
      <h4 className='title'>{title}</h4>
      <p className='author'>{author}</p>
      <p className='link'>
        <a href={magzineUrl} className='magzine'>{magzine}</a>
        arXiv:<a href={arXivUrl} className='arxiv'>{arXiv}</a>
      </p>
    </li>
  )
}
