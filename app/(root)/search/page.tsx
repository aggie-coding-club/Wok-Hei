"use client"
import React, { useState } from 'react'
import Brownies from "@/components/Brownies";
import foodItemClass from './foodItemClass.js'
import Image from 'next/image.js';

const Search = () => {
  const [prompt, setPrompt] = useState('');
  const [ans, setAns] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState<[string[], string[], string]>([[''], [''], '']);

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

  const foodItemsList = [
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      290,
      ['beens', 'greens', 'potatoes', 'tomatoes', 'chicken', 'turkey', 'lamb', 'ham'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      1
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      2
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      3
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      4
    ),
    new foodItemClass(
      'Papaya', 
      'https://www.stroke.org/-/media/Images/News/2023/October-2023/1013EIOLIPapaya_SC.jpg?sc_lang=en',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      5
    ),
    new foodItemClass(
      'Pumpkins', 
      'https://www.washingtonpost.com/resizer/R6HrS-hkVTLgVqrZdnP5354l1XE=/arc-anglerfish-washpost-prod-washpost/public/VAAKMD4TGKOT5HF4I74MI5LXMI.jpg',
      290,
      ['flour', 'eggs', 'nutmeg', 'cinnamon', 'dog', 'sugar', 'baking soda'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      6
    ),
    new foodItemClass(
      'Brownies', 
      'https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-blog-1-of-2.jpg',
      290,
      ['flour', 'eggs', 'choco', 'chip', 'dog'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      7
    ),
    new foodItemClass(
      'Pumpkins', 
      'https://plus.unsplash.com/premium_photo-1727266867745-0927e5ebd6fe?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      290,
      ['flour', 'eggs', 'nutmeg', 'cinnamon', 'dog', 'sugar', 'baking soda'],
      ['take the dog behind the house', 'put lead in the dog', 'take intestines out', 'skin Skippy', 'preheat oven to 350 degrees farenheit'],
      10,
      20,
      0,
      8
    ),
  ]

  return (
    <>
    <div className='search-main h-screen flex flex-col items-center'>
      <div className='w-full bg-slate-100 p-8 flex justify-end align-middle gap-2.5'>
        <div className='mr-auto text-3xl font-semibold'>Search</div>
        <Image onClick={handleGenerate} src="https://www.svgrepo.com/show/522266/search.svg" className='h-6 self-center cursor-pointer transition-transform transform hover:scale-110' alt='hi' width={54} height={54}/>
        <input value={prompt} type="text" className="border rounded-full p-1 pl-3" onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt lol.."/>
      </div>      
      <div>{ans}</div>
      <div className='mt-4 grid lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 grid-cols-2 gap-4 place-items-center'>
        {foodItemsList.map((item) => (
          <Brownies
            key = {item.id}
            name = {item.name}
            link = {item.link}
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
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center" onClick={closeModal}>
            <div className='bg-white rounded-[50px] overflow-hidden'>
              <div className={`h-[500px] w-[500px] p-[40px] ${currentRecipe[2]} bg-opacity-85 text-white flex flex-col gap-2`}>
                <div>
                  <div className="text-3xl font-bold mb-[5px]">Ingredients</div>
                  <ul className='list-disc font-bold ml-[15px]'>
                    {currentRecipe[0].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-[5px]">Instructions</div>
                  <ol className='list-decimal font-bold ml-[19px]'>
                    {currentRecipe[1].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>          
        </>
      )}
    </>
  )
}

export default Search
