import React, { useState } from 'react'
import { SearchIcon } from "lucide-react"

function Search({search,onSearchChange}) {
   
  return (
    <>
    <div className="w-full max-w-full mx-auto p-4 bg-gray-950 flex items-center justify-center">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e)=>onSearchChange(e)}
          className="w-full bg-gray-900 text-white placeholder-gray-400 pl-10 pr-10 py-4 rounded-full border-none "
        />
        
      </div>
    </div>
    
    </>
  )
}

export default Search
