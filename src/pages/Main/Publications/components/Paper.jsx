import React from 'react'
import './Paper.css'

export default function Paper({author,title,magzine,magzineUrl,arXiv,arXivUrl,index}) {
  return (
    <li>
      <h4 className='title'>{index+1}.&nbsp;{title}</h4>
      <p className='author'>{author}</p>
      <p className='link'>
      {magzineUrl.length>0 
        && <a rel="noreferrer" target="_blank" href={magzineUrl} className='magzine'>{magzine}</a>
      }
        <a rel="noreferrer" target="_blank" href={arXivUrl} className='arxiv'>
          <span className='arxiv'>arXiv: </span>{arXiv}
        </a>
      </p>
    </li>
  )
}
