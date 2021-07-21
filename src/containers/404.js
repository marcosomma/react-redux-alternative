import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <p variant={'h1'}>Ops! 404</p>
      <Link to="/">
        <p variant={'body1'}>go to landing</p>
      </Link>
    </div>
  )
}

export default NotFound
