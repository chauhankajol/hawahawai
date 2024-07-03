import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { GiSplitCross } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Fourthpart = () => {
  return (
    <div className='h-[15vh] flex  justify-around'>
        <div className="image  pl-10 pt-10 flex gap-10">
        <FaLinkedin className='text-4xl'/>
        <GiSplitCross className='text-4xl' />
        <FaInstagram  className='text-4xl'/>
        <FaWhatsapp  className='text-4xl'/>

        </div>
        <div className="content flex pt-10 gap-10">
            <p>Team of service</p>
            <p>Privacy policy</p>
            <p>@2024 All rights reserved</p>
        </div>


    </div>
  )
}

export default Fourthpart