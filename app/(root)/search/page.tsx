"use client"
import React, { useState } from 'react'

const Search = () => {
  const [prompt, setPrompt] = useState('');
  const [ans, setAns] = useState('');

  const handleGenerate = async () => {
    try {
      // console.log("hi")
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: prompt })
      });

      const data = await response.json();
      if (response.ok) {
        setAns(data.output)
      } else {
        // console.error(data.error);
      }
    } catch (error) {
      // console.error('Error:', error);
    }
  };
  return (
    <div>
      search
      <div>
        <input value={prompt} type="text" onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt lol.." />
        <div onClick={handleGenerate}>click!</div>
      </div>
      
      <div>{ans}</div>
    </div>
  )
}

export default Search
