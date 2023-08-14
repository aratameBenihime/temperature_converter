"use client";
import Image from "next/image";
import { useCityContext } from "@/app/hooks/useCity";
import { useState } from "react"; // Import useState

export default function SearchBar() {
  const { cityName, setCityName } = useCityContext();
  const [inputValue, setInputValue] = useState(""); // Add state for the input value

  const searchBarHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCityName(inputValue); // Use the input value from state
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value state
  };

  return (
    <div className="px-[30px] mt-6">
      <div className="flex flex-row justify-between items-center bg-[#1e1e21] h-[55px] w-full rounded-full px-[20px]">
        <form onSubmit={searchBarHandler} className="flex flex-1">
          <input
            className="bg-transparent flex-1 h-[40px]"
            placeholder={cityName}
            type="text"
            value={inputValue} // Set the input value from state
            onChange={handleInputChange} // Handle input changes
          />
          <button type="submit" className="h-[40px] w-[40px]">
            <Image
              alt="Search"
              className="ml-3 h-auto w-auto"
              height={15}
              src="svg/search.svg"
              width={15}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
