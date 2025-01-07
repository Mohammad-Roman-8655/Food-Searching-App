import React from 'react'

function SearchBar({search,setSearch,fetchFood}) {
  return (
    <div className='main lg:flex md:flex flex-wrap text-center  justify-center py-10 '>
      <input type="text" 
      value={search}
      placeholder='Search your food'
      onChange={(e)=>{setSearch(e.target.value)}}
      className='bg-gray-200 py-1.5 px-2 w-80  pl-6 text-xl p-5 rounded hover:border-2 outline-none hover:border-red-500'/>
      <button onClick={fetchFood} className='bg-red-600 text-white text-2xl lg:px-4 md:px-4 px-3 py-3   font-bold rounded lg:mt-0 md:mt-0 mt-5'>Search</button>
      
    </div>
  )
}

export default SearchBar