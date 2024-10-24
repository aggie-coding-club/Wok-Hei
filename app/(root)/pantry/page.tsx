import React from 'react'

import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";

const Pantry = () => {
  return (
    <div>
      <div className='w-full bg-slate-50 p-8'>
        <h1 className='mr-auto text-3xl font-semibold'>Pantry</h1>
      </div>

      <div>
        <div>Sort By</div>

        <div className='shadow-xl w-1/5 h-1/5 rounded-xl bg-gray-200'>
          <button className='text-green-600'><CiSquareRemove size={30}/></button>
          <img src="https://cdn.britannica.com/63/193863-050-0EC30803/Parsley.jpg" alt="parsley" className='rounded-xl p-3'/>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <button className='text-green-600'><CiSquareMinus size={25}/></button>
              <input type="" placeholder='0' className='bg-slate-300 w-20 h-8 mb-3 rounded-xl'/>
              <button className='text-green-600'><CiSquarePlus size={25}/></button>
            </div>

            <select name="units" id="unit-select" className='bg-green-600 text-green-100 h-8 rounded-xl'>
              <option value="lbs">lbs</option>
              <option value="tbsp">tbsp</option>
              <option value="tsp">tsp</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pantry
