"use client"
import React, { useState } from 'react'
import Brownies from "@/components/Brownies";

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
    <div className='search-main h-screen'>
      <div className='w-full bg-slate-100 p-8 flex justify-end align-middle gap-2.5'>
        <div className='mr-auto text-3xl font-semibold'>Search</div>
        <img onClick={handleGenerate} src="https://www.svgrepo.com/show/522266/search.svg" className='h-6 self-center cursor-pointer transition-transform transform hover:scale-110'/>
        <input value={prompt} type="text" className="border rounded-full p-1 pl-3" onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt lol.."/>
      </div>      
      <div>{ans}</div>
      <div className='grid grid-cols-3 gap-4 place-items-center'>
        <Brownies 
          name='Brownies' 
          link='' 
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='' 
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='' 
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='' 
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='' 
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='' 
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
      </div>
    </div>
  )
}

export default Search
