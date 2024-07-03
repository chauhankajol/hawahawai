import React, { useState } from 'react'
 import list from'./list.json'
 import DatePicker from "react-datepicker";
 import 'react-datepicker/dist/react-datepicker.css';








const Part = () => {
    const [isOpen,setIsOpen]= useState(false) 
    const [select,setSelect]=useState('')
    const [selectedDate,setDate]=useState(null)
    const[value,setValue]=useState()


  return (
    <div className='bg-pink-100  h-[95vh]m-4 rounded-3xl flex width-[100vh] overflow-hidden '>
 <div className="part1 w-[95vh] pl-[30vh] pt-[12vh]    ">

    <h1 className='font-bold text-4xl'>Get Your Flight Alerts Free on <span className='text-green-400'>WhatsApp</span></h1>
    <p className='font-medium text-2xl mt-4'>No app out there tracks flight and notify you for free</p>
    
  <div className="dropdown relative flex flex-col pt-5 ">
 <input type="text" className='outline-none  h-6' name="" id="" placeholder='Enter Airline'   value={select}  onClick={()=>setIsOpen((prev)=>!prev)}/>
 
  {isOpen&&(
  <div >
  
      <select name="" id=""    onChange={(e)=>(e.target.value)} className='flex  outline-none   bottom-0 right-[10vh]'>
     {
         list.map(item =>
     
        <option value={item.AirlineName}>{item.AirlineName}</option>
          
        )
        }

   </select> 
   </div>
        
   
 )}
<div>
  
 <input type="text"className=' relative w-[65vh] pt-8 outline-none' placeholder='Enter your flight number eg.(5866)' />

 
</div>
   <div className='relative bg-white '> 

    <input type="text" className='  w-[65vh]  pt-6 outline-none ' placeholder='Date of deprature' onClick={()=>setIsOpen((prev)=>!prev)} />
 
  {
  isOpen&&(


 <DatePicker  className=' flex  absolute outline-none   bottom-0 right-[18vh] ' selected={selectedDate} onChange={date=>setDate(date)} />
   
  )
 }  
 



 
  </div> 
 
  <div className='items-center'>
 <a className='  ' href="https://web.whatsapp.com/">  <button className='text-white  bg-black h-15 mt-3 rounded-sm pr-[30vh] flex justify-center items-center pl-[15vh]'> Subscribe to WhatsApp</button> </a>
 </div>

 
  </div>
  
 {/* part-2  */}

 </div>
 <div className="part2  ">
 <div className="box1   ml-[30vh] mt-20 w-[40vh] h-[20vh] border border-black rounded-2xl position-relative shadow-2xl">
 <div className='position-absolute h-20 w-[30vh] -mt-[9vh] -ml-[20vh]  -pt-[10vh]'>
 <img  className=''  src='Airplane-removebg-preview.png'/>
 </div>
 <div>
 <div>
  
  <p className='  flex font-bold  pl-10 '>BOM <span ><img  className='h-5 w-5' src="plane.png" alt="" /></span>DEl</p>
   <p className=''>Good Morning your flight is on time</p>
  <p className=' flex pl-1'><span ><img  className='h-5 w-5' src="plane.png" alt="" /></span>BOM T2.Gate 12 at 10.30am</p>
  <p className=' flex pl-1'><span ><img  className='h-5 w-5' src="plane.png" alt="" /></span>DEL T4. Gate 6 at 12:45AM</p>
 
  </div>
  
 <div  className=' h-[15vh]   flex ml-[40vh]  mb-[20vh] absolute inset-y-40 right-[25vh] w-25 rotate-12 '>
 <img  src="wlogo.png" alt="" />
 </div>

 
 </div>





 {/* box-2 */}

 </div>
 <div className="  box2   ml-[30vh] mt-2 w-[40vh] h-[15vh] border border-black rounded-2xl position-relative shadow-2xl">
 <div className='position-absolute h-[10vh] w-[10vh] -ml-[5vh] -mt-9 '>
 <img  className=''  src='danger_272238.png'/>
 </div>
 <div>
<h1 className='font-bold pl-10 -mt-[4vh]'>Flight preponed 30 min</h1>
 <p className=' flex pl-1'>New Deprature 10:30 Am</p>
 <p className=' flex pl-1'> New Arrival at 12:45AM</p>
 </div>
 

 </div>
{/* box-3 */}

 <div className="box3 ml-[30vh] mt-2 w-[40vh] h-[10vh] border border-black rounded-2xl position-relative shadow-2xl">
 
 <div>
  
 
  <p className=' font-bold flex mt-3 ml-3'> <span><img  className='h-5 w-5'src="loud-speaker_4890204.png" alt="" /> </span>Boarding gate change</p>
 <p className=' flex pl-1   ml-3'> <span><img  className='h-5 w-5' src="decree_265737.png" alt="" /></span>New Gate 8A</p>
 
 </div>

 <div className=' h-[15vh]  flex ml-[40vh]  mb-[20vh] absolute inset-y-[53vh] right-[30vh] w-16 '>
  <img src="speaker.png" alt="" />
 </div>
 

 </div>

{/* box-4 */}
<div className=" z-1 flex items-center justify-center box4  w-[20vh] h-[7vh] border border-black rounded-xl bg-black ml-[60vh] absolute inset-y-[64vh] -rotate-12">
<p className='text-white font-bold'>
  Fly Master
</p>



</div>




{/* box-5 */}
 <div className="box5 ml-[45vh] mt-3 w-[40vh] h-[20vh] bg-lime-200 border border-black rounded-2xl position-relative shadow-2xl">
 
 <div>
  <h1 className='font-medium ml-5 flex'>Perfect! <span>< img  className='h-5 w-5'src="like.png" alt="" /></span></h1>
 <p className=' flex pl-1'>Also keep me updated on the webcheck in opening time for my flight</p>
 
 </div>

<div  className=' h-[15vh]  flex ml-[40vh]  mb-[20vh] absolute inset-y-[65vh] right-[15vh] w-16 '>
  <img src="smiley-4836178_1280-removebg-preview.png" alt="" />
</div>



 </div>




  </div>


  </div>

  )
}

export default Part