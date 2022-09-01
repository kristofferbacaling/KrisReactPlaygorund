import React from 'react'
import Pixel from './Pixel'

const NewPage = () => {
  return (
    <div>
      { Array.from(
        {length:500}, (e, inx) => <Pixel key = {'p' + inx} />
      )}
    </div>
  )
}

export default NewPage