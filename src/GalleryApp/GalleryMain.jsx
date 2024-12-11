import React, { useState } from 'react';
import axios from "axios";
import GalleryData from './GalleryData';

const apiKey="636e1481b4f3c446d26b8eb6ebfe7127";
const GalleryMain = () => {
    const[search,setSearch] =useState("");
    const[data,setData]=useState([])

    function handleChange(e){
        setSearch(e.target.value)
        console.log( setSearch(e.target.value));
    }
    function submitChange(e){
        e.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=15&format=json&nojsoncallback=1`).then(
            res=>setData(res.data.photos.photo)
        )
        console.log(search)
        
    }
  return (
    <div className='w-full h-screen bg-gradient-to-t from-gray-950 to-cyan-700 text-white flex flex-col justify-center items-center overflow-auto p-5'>
      <div className='w-full h-full my-10'>
      <h1 className='font-bold text-2xl text-center md:text-3xl'> I'm in Gallery App!</h1>
        <div className='my-5 text-center '>
            <input className='text-gray-600 p-1 rounded-md border-2 hover:border-yellow-500 hover:shadow-lg hover:shadow-black' type="text" value={search} onChange={handleChange} placeholder='Search' />
            <input type="submit" className='bg-gray-700 p-1.5 px-3 mx-2 rounded-md hover:bg-yellow-300 hover:shadow-lg hover:shadow-white' name='Search' onClick={submitChange}/>
        </div>
        <div className='w-full'>
          <ul className=''>
           {data.length>=1? 
            <li>  <GalleryData data={data}/></li>:<p className='font-bold text-center text-yellow-400 text-2xl'>Enter Something in the above input and click on submit button.</p>}  

          </ul>
        

        </div>
       
     </div>
    </div>
  )
}

export default GalleryMain
