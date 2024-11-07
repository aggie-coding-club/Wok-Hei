"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define the type of the props to expect the array of options
interface DropdownListProps {
  options: string[]; // Array of options passed from the parent component
}

const DropdownList = ({ options }: DropdownListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]); // Set initial value to the first option

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div
      className="w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row ml-4">
        <div>Sort By: {selectedValue}</div>
        <div className="">
          <ChevronDown size={30} />
        </div>
      </div>

      {isOpen && (
        <ul className="fixed bg-white rounded flex flex-col gap-2 drop-shadow-xl">
          {options.map((option) => (
            <li key={option}>
              <button
                className="hover:bg-green-100 p-5 hover:rounded w-full text-left hover:text-green-800"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownList;
