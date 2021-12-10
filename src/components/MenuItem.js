import React, { useState } from 'react';
import { MdOutlineArrowDropDown as Down, MdOutlineArrowDropUp as Up } from 'react-icons/md'

const MenuItem = ({ name, subMenus, inactive, icon, to }) => {

   console.log(inactive);

   const [expand, setExpand] = useState(false);

   const showSubmenu = () => {
      setExpand(!expand);
   }

   return (
      <li className='cursor-pointer'>
         <a onClick={showSubmenu} className='flex items-center'>
            <div className='mr-3 text-2xl'>{icon}</div>
            <span className={`text-md ${inactive && 'hidden'}`}>{name}</span>
            {subMenus.length > 0 && !expand && <Down className='text-2xl mr-1'/>}
            {expand && (<Up className='text-2xl mr-1'/>)}
         </a>
         {/* Submenu */}
         {
            subMenus && subMenus.length > 0 ? (
               <ul className={`ml-3 border-l border-gray-500 pl-8 my-2 ${!expand ? 'hidden ' : ''} `}>
                  {
                     subMenus.map((menu, index) => (
                        <li key={index}><a href='#' className={`text-sm cursor-pointer ${inactive && 'hidden'}`}>{menu.name}</a></li>
                     ))
                  }
               </ul>
            ) : null
         }
      </li>
   )
}

export default MenuItem
