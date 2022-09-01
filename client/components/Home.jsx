import React from 'react'
import tamer from '../../data/tamers'
import { Link } from 'react-router-dom'

const Home = () => {
  //const { name } = useParams()
  // console.log(tamer)
  const tamersObj = Object.keys(tamer)
  console.log('tamer', tamer)

  return (
    <div>
      <h1>This the home page</h1>
      <ul>
        {tamersObj.map((tamersId, idx) => {
          return (
            <Link to={`/tamers/${tamersId.id}`} key={idx}>
              <li>{tamersId.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
