import React from 'react'
import '../css/Body.css'
import ReactPlayer from 'react-player'

const Body = () => {
  return (
    <div>
        <h1 className="content">
            content
            <h2>
            <ReactPlayer url={'https://www.youtube.com/watch?v=dC40ldh8ozY&t=10s&pp=ygULaGFwcHltYXRpY3M%3D'} controls ></ReactPlayer>
      </h2>
       </h1>
        
    </div>
  )
}

export default Body
