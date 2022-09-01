import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to={'/newpage'}>
        <button>Press me</button>
      </Link>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Nav
