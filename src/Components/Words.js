import React, { useState } from 'react'

const Words = () => {
    const[word,setword]=useState('');
  return (
    <div>
      <label htmlFor="inputBox">IN</label>
            <input type="text" value={word} onChange={(e) => setword(e.target.value)} />
            <p>
                {word}
            </p>

    </div>
  )
}

export default Words
