"use client"
import React, { useState } from 'react'
import Brownies from "@/components/Brownies";
import foodItemClass from './foodItemClass.js'

const Search = () => {
  const [prompt, setPrompt] = useState('');
  const [ans, setAns] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState<[string[], string[]]>([[''], ['']]);

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

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

  let foodItemsList = [
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      'bg-amber-900',
      'hover:bg-amber-900',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      'bg-amber-900',
      'hover:bg-amber-900',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      'bg-amber-900',
      'hover:bg-amber-900',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      'bg-amber-900',
      'hover:bg-amber-900',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      'bg-amber-900',
      'hover:bg-amber-900',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
    ),
    new foodItemClass(
      'Pumpkins', 
      'https://www.washingtonpost.com/resizer/R6HrS-hkVTLgVqrZdnP5354l1XE=/arc-anglerfish-washpost-prod-washpost/public/VAAKMD4TGKOT5HF4I74MI5LXMI.jpg',
      'bg-amber-700' ,
      'hover:bg-amber-700',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
    ),
  ]
  // foodItemsList.push(new foodItemClass(
  //   'Brownies', 
  //   'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
  //   'bg-amber-900',
  //   'hover:bg-amber-900',
  //   290,
  //   ['flour', 'eggs', 'choco', 'chip', 'dog'],
  //   ['take the dog behind the house', 'shoot the dog', 'gut the dog', 'skin the dog', 'preheat oven to 350 degrees farenheit'],
  //   10,
  //   20,
  //   0,
  // ))

  return (
    <>
    <div className='search-main h-screen'>
      <div className='w-full bg-slate-100 p-8 flex justify-end align-middle gap-2.5'>
        <div className='mr-auto text-3xl font-semibold'>Search</div>
        <img onClick={handleGenerate} src="https://www.svgrepo.com/show/522266/search.svg" className='h-6 self-center cursor-pointer transition-transform transform hover:scale-110'/>
        <input value={prompt} type="text" className="border rounded-full p-1 pl-3" onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt lol.."/>
      </div>      
      <div>{ans}</div>
      <div className='grid grid-cols-3 gap-4 place-items-center'>
        {/* <Brownies 
          name='Brownies' 
          link='https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg'
          color='bg-amber-900' 
          hover='hover:bg-amber-900'
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg'
          color='bg-amber-900' 
          hover='hover:bg-amber-900'
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg'
          color='bg-amber-900' 
          hover='hover:bg-amber-900'
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg'
          color='bg-amber-900' 
          hover='hover:bg-amber-900'
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg'
          color='bg-amber-900' 
          hover='hover:bg-amber-900'
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies>
        <Brownies 
          name='Brownies' 
          link='https://www.washingtonpost.com/resizer/R6HrS-hkVTLgVqrZdnP5354l1XE=/arc-anglerfish-washpost-prod-washpost/public/VAAKMD4TGKOT5HF4I74MI5LXMI.jpg'
          color='bg-amber-700' 
          hover='hover:bg-amber-700'
          cal={290}
          ingredient={['flour', 'eggs', 'choco', 'chip', 'dog']}
          protein={10}
          carb={20}
          fat={0}
          expanded={false}
        ></Brownies> */}
        {foodItemsList.map((item) => (
          <Brownies
            name = {item.name}
            link = {item.link}
            color = {item.color}
            hover = {item.hover}
            cal = {item.cal}
            ingredient = {item.ingredients}
            instructions = {item.instructions}
            protein = {item.protein}
            carb = {item.carb}
            fat = {item.fat}
            id = {item.id}
            setIsOpen = {setIsOpen}
            setCurrentRecipe = {setCurrentRecipe}
          ></Brownies>
        ))}
      </div>
    </div>

    {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          ></div>
        </>
      )}
    </>
  )
}

export default Search
