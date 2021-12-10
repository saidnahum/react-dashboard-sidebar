import React, { useState } from 'react';
import Logo from '../assets/logo/webscript.png';
import { BsFillArrowLeftSquareFill as LeftArrow, BsFillArrowRightSquareFill as RightArrow} from 'react-icons/bs';
import MenuItem  from './MenuItem'
import menu from './Menu';

const SideMenu = ({ inactive, setInactive }) => {

   const menuItems = menu;

   const [dark, setDark] = useState(false);

   // const darkMode = () => {
   //    setDark(!dark);
   // }

   const Inactive = () => {
      setInactive(!inactive)
   }

   return (
      <div className={`${!dark ? 'dark' : ''}`}>
         <div className={`fixed bg-black w-80 h-full py-8 px-5 transition-all duration-500 ${inactive ? 'w-20' : ''}`}>
            {/* Top Section */}
            <div className={`flex items-center justify-between ${inactive && 'flex-col'}`}>
               <div className={`w-10 h-10 overflow-hidden ${inactive && 'mb-5'}`}>
                  <img
                     src={Logo}
                     alt="logo"
                     className='max-w-full max-h-full'
                  />
               </div>
               <div onClick={Inactive}>
                  {
                     inactive 
                        ? (<RightArrow className='text-[#333] text-xl' />)
                        : (<LeftArrow className='text-[#333] text-xl' />)
                  }
               </div>
            </div>

            {/* Search Section */}
            <div className="relative text-gray-600 focus-within:text-gray-400 my-5">
               <span className={`absolute inset-y-0 left-0 flex items-center pl-2 ${inactive && 'pl-1'}`}>
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
               </span>
               <input 
                  className="py-2 text-sm text-white bg-[#333] rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 block w-full" 
                  placeholder="Search..." 
                  autoComplete="off"
               />
            </div>

            {/* Divider */}
            <div className='w-full h-px rounded-sm bg-[#333]'></div>

            <div className='text-gray-500 mt-5'>
               <ul className='space-y-5'>
                  {
                     menuItems.map((menuItem, index) => (
                        <MenuItem
                           key={index}
                           name={menuItem.name}
                           to={menuItem.to}
                           subMenus={menuItem.subMenus || []}
                           icon={menuItem.icon}
                           to={menuItem.to}
                           inactive={inactive}
                        />
                     ))
                  }
               </ul>
            </div>
         </div>
      </div>
   )
}

export default SideMenu
