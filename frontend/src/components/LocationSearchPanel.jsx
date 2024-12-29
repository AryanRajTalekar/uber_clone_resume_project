import React from 'react'

const LocationSearchPanel = (props) => {

    // console.log(props);

    const locations = [
        "24B,Near Kapoor's cafe, Bhopal",
        "Flat 24B, Opposite Kapoor's Cafe, Bhopal",
        "24B, Next to Kapoor's Cafe, Main Street, Bhopal",
        "Apartment 24B, Close to Kapoor's Cafe, Bhopal City",
        "House 24B, Near Kapoor's Cafe, New Market Road, Bhopal"
    ]
  return (
    <div>
        {
            locations.map((location,index)=>{
                
                return <div key={index} onClick={()=>{
                    props.setvehiclePanelOpen(true);
                    props.setpanelOpen(false);
                }}   className='flex gap-4 p-2 active:border-black border-gray-100 border-2 items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
                <h4 className='text-sm font-medium'>{location}</h4>
            </div>
            })
        }     
    </div>
  )
}

export default LocationSearchPanel