import React, { useState } from 'react';
import { MdOutlineArrowDropDown as Down, MdOutlineArrowDropUp as Up } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ name, subMenus, inactive, icon, to }) => {
   
   const [expand, setExpand] = useState(false);

   const showSubmenu = () => {
      setExpand(!expand);
   }

   return (
         <li className='cursor-pointer text-gray-300'>
            <span onClick={showSubmenu} className='flex items-center'>
               <div className='mr-3 text-2xl'>{icon}</div>
               <NavLink to={`${to}/`} className={`text-md ${inactive && 'hidden'}`} activeClassName="text-red-300">{name}</NavLink>
               {subMenus.length > 0 && !expand && <Down className='text-2xl mr-1' />}
               {expand && (<Up className='text-2xl mr-1' />)}
            </span>
            {/* Submenu */}
            {
               subMenus && subMenus.length > 0 ? (
                     <ul className={`ml-3 border-l border-gray-500 pl-8 my-2 ${!expand ? 'hidden ' : ''} `}>
                        {
                           subMenus.map((menu, index) => (
                              <div key={index}>
                                 <li>
                                    <NavLink className={`text-sm cursor-pointer ${inactive && 'hidden'}`} to={menu.to} activeClassName="text-red-300">
                                       {menu.name}
                                    </NavLink>
                                 </li>
                              </div>
                           ))
                        }
                     </ul>
               ) : null
            }
         </li>
   )
}

export default MenuItem
