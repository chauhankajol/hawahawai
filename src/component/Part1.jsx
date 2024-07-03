import React from 'react'

const Part1 = () => {
  return (
    <div className=' bg-black  h-[75vh] flex '>
        {/* part--1 */}
    <div className='part1 w-[95vh] pl-[30vh] pt-[20vh] ' >
        <p className='font-medium text-slate-400'> Coming soon</p>
        <p className='font-bold text-3xl text-white'>Step by step  guidence to keep  away travel from anxity</p>

        <p className=' mt-5 font-medium text-xl text-white'> Wait with us  and you will get it all</p>




    </div>
 {/* part---2 */}

 <div className='part2'>
    {/* box--1 */}
<div className="box1   ml-[30vh] mt-20 w-[50vh] h-[20vh] border border-black  bg-white rounded-2xl ">
<div>
<p className=' text-slate-400 pl-5 pt-3  flex gap-1 '><span>< img className='h-5 w-5 ' src="road.png" alt="" /></span>AirBus A350 .SQ23</p>
</div>
<div className="whole flex justify-evenly">
<div className='mt-3 pl-4'>
    <p className='font-bold text-3xl mt-1'>JFK <span className='flex font-thin text-xl/3  text-slate-400'><img  className='h-3 w-3 src' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_the_Mayor_of_New_York_City.svg/160px-Flag_of_the_Mayor_of_New_York_City.svg.png" alt="" />New York</span></p>
</div>
  <div>
  <p className='  text-slate-400 pt-7 '> 19 hrs 0 min</p>
  </div>
  <div>

<div className='mt-3 pl-4'>
<p className='font-bold text-3xl mt-1'>SIN <span className='flex font-thin text-xl/3  text-slate-400'><img  className='h-3 w-3 src' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_the_Mayor_of_New_York_City.svg/160px-Flag_of_the_Mayor_of_New_York_City.svg.png" alt="" />Singapore</span></p>
</div>
  </div>






</div>


 </div>
{/* box----2 */}
<div className="box2 flex justify-between ml-[30vh] mt-3 w-[50vh] h-[10vh] border border-black bg-zinc-900 rounded-lg">
<div>
<p className='text-yellow-50 pl-5 pt-2 font-thin'>  Web check-in closes in</p>
<p className='  pl-5  font-thin text-sm text-slate-400'>Terminal</p>
</div>
  <button className=' flex bg-amber-500 h-5 w-10 mt-4 mr-4 rounded items-center'>02:35</button>
</div>

{/* --box-3 */}

<div>
<div className="box2 flex justify-between ml-[30vh] mt-3 w-[50vh] h-[10vh] border border-black bg-zinc-900 rounded-lg">
<div>
<p className='text-yellow-50 pl-5 pt-2 font-thin'>  Boarding Closes in 00:30 min</p>
<p className='  pl-5  font-thin text-sm text-slate-400'>on time</p>
</div>
<button className=' flex bg-amber-500 h-5 w-10 mt-4 mr-4 rounded items-center'>02:35</button>
</div>
{/* ---box-3 */}
<div className=' box3 flex justify-between ml-[30vh] mt-3 w-[50vh] h-[10vh] border border-black bg-zinc-900 rounded-lg shadow-lg '>
<div>
<p className='text-yellow-50 pl-5 pt-2 font-thin'>  Web check-in closes in</p>
<p className='  pl-5  font-thin text-sm text-slate-400'>Terminal</p>
</div>
  <button className=' flex bg-amber-500 h-5 w-15 mt-4 mr-4 rounded items-center'> <span><img className='h-4 w-4 ' src="cabinet.png" alt="" /></span>02:35</button>
  
</div>
</div>
</div>
    </div>
  )
}

export default Part1