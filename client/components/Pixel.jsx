import React, {useState} from 'react'

const Pixel = () => {
  const [style, setStyle] = useState(
    {
      width: '60px',
      backgroundColor: randomHexColor(),
      height: '60px',
      borderRadius: '50%'
    }
  )

  const clickHandler = () => {
    setStyle({
      ...style,
      backgroundColor: randomHexColor(),
    })
  }
  
  const mouseEnterHandler = () =>{
    setStyle({
      ...style,
      backgroundColor: randomHexColor(),
    })
  }

  const contextMenuHandler = evt =>{
    evt.preventDefault()
    setStyle({
      backgroundColor: 'black',
      width: style.width,
      height: style.height
    })
  }

  const doubleClickHandler = () =>{
    setStyle({
      backgroundColor: 'white',
      width: style.width,
      height: style.height
    })
  }

  const dragEnterHandler = () =>{
    setStyle({
      backgroundColor: 'coral',
      width: style.width,
      height: style.height
    })
  }

  setInterval(clickHandler, 2000)

  return (
    <div style = {style}
    onClick = {clickHandler}
    onMouseEnter = {mouseEnterHandler}
    onContextMenu = {contextMenuHandler}
    onDoubleClick = {doubleClickHandler}
    onDragEnter = {dragEnterHandler}>
    </div>
  )

  

}

const randomHexColor = () => {
  return ( 
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  )
}


export default Pixel