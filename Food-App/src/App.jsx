import React, { useState } from "react"
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import ProductCard from './Components/ProductCard'

function App() {
 
  const [allFood,setAllFood]=useState([]);
  const [search,setSearch]=useState('');
  const [loading,setLoading]=useState(false);

  const APP_ID = "b3972793"
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"
  
  const fetchFood= async ()=>{
    try{
      setLoading(true);
      const res= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await res.json();
      console.log(data);
      setAllFood(data.hits);
      
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false);

    }
  }
  


  return (
    <>
<NavBar/>
<SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
<ProductCard allFood={allFood} loading={loading}/>
     
    </>
  )
}

export default App
