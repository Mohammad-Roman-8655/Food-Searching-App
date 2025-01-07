import React from 'react'

function ProductCard({allFood,loading}){
  return (
           <>
              { loading ?
             <div className='flex justify-center '>
                <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
             </div>
             :
             <>
                <div className='main px-4 mt-5 flex  flex-wrap  '>
                {allFood.map((item,index)=>{
                const {image,label,calories,dishType,cuisineType}=item.recipe;
        return(
          <div className="md:w-1/4 w-full  p-4" key={index}>
          <div className="content bg-red-600 shadow-md p-4 rounded hover:shadow-black hover:shadow-lg duration-500">
        <img src={image} alt="" />
        <h2 className='text-xl font-bold text-start text-white p-4'>{label.substr(0, 25)}</h2>
        <h2 className='text-xl font-bold text-start text-white p-4'><span className="font-bold">Calories:</span> {calories}</h2>
        <h2 className='text-xl font-bold text-start text-white p-4'><span className='font-bold'>DishType:</span> {dishType}</h2>
        <h2 className='text-xl font-bold text-start text-white p-4'><span className='font-bold'>CuisineType:</span> {cuisineType}</h2>
        <div className="flex justify-between items-center p-5">
          <button className='text-xl text-white  bg-green-700 py-3 px-2 font-bold rounded border-2 border-white hover:border-blue-500'>Add to Cart</button>
          <button className='text-xl text-white  bg-green-700 py-3 px-2 font-bold rounded border-2 border-white hover:border-blue-500'>Buy Now</button>
        </div>

      </div>
    </div> 
    )
      })}
      </div>
  
    
  </>
  }
  </>
  )
}


export default ProductCard