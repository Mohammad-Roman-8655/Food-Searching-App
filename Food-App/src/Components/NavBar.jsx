import React from 'react'

function NavBar() {
  return (
    <div className='main lg:flex md:flex flex-wrap space-y-3 justify-between  text-center p-4  bg-red-600 text-white'>
        <div className="left">
            <div className="logo font-bold text-3xl ml-5 text-white text-center">
                Food App
            </div>
        </div>
        <div className="right">
            <ul className='flex space-x-5 ml-5 text-xl ' >
                <li className='cursor-pointer font-bold '>Home</li>
                <li className='cursor-pointer font-bold'>About</li>
                <li className='cursor-pointer font-bold'>Contact</li>
                <li className='cursor-pointer font-bold'>Services</li>
            </ul>

        </div>
        
    </div>
  )
}

export default NavBar