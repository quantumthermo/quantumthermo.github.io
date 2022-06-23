import React from 'react'
import {useRoutes} from 'react-router-dom'
import routes from '../../routes'

export default function Main() {
  const element = useRoutes(routes)
  return (
    <main>
      {element}
    </main>
  )
}
