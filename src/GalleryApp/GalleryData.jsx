import React from 'react'
const GalleryData = ({data}) => {
  return (
    <div className=' w-full h-screen m-10 '>
        <div className="flex flex-wrap gap-3 m-10">
        {data.map((image)=>
          <div key={image.id} className="flex-wrap">
            <div>
                <img
                className='rounded-lg h-52 w-52 hover:shadow-lg hover:shadow-white'
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                alt="images" 
                height="250" 
                width="250" 
                />
               
            </div>
           </div>)}
    </div>
       
    </div>
  )
}

export default GalleryData
