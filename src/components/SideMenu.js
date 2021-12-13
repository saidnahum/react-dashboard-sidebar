import React, { useState } from 'react';
import Logo from '../assets/logo/logoCna.png';
import { BsFillArrowLeftSquareFill as LeftArrow, BsFillArrowRightSquareFill as RightArrow} from 'react-icons/bs';
import MenuItem  from './MenuItem'
import menu from './Menu';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

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
         <div className={`fixed bg-[#13322B] w-56 h-full py-8 px-5 transition-all duration-500 overflow-y-auto ${inactive ? 'w-20' : ''}`}>
            {/* Top Section */}
            <div className={`flex items-center justify-between mb-5 ${inactive && 'flex-col'}`}>
               <div className={`w-10 h-10 overflow-hidden ${inactive && 'mb-5'}`}>
                  <img
                     src={Logo}
                     alt="logo"
                     className='max-w-full max-h-full'
                  />
               </div>

               <span className={`text-white w-full ml-3 ${inactive && 'hidden'}`}>Red de Radares</span>

               <div onClick={Inactive}>
                  {
                     inactive 
                        ? (<RightArrow className='text-gray-500 text-xl' />)
                        : (<LeftArrow className='text-gray-500 text-xl' />)
                  }
               </div>
               
            </div>
            

            {/* Divider */}
            <div className='w-full h-px rounded-sm bg-[#333]'></div>
            
            {/* Links Section */}
            <div className='text-gray-500 mt-5'>
               <ul className='space-y-5'>
                  <div className='flex items-center cursor-pointer text-gray-300'>
                     <AiOutlineHome className='mr-3 text-2xl'/>
                     <NavLink exact to="/" className={`text-md ${inactive && 'hidden'}`}  activeClassName="text-red-300">Inicio</NavLink>
                  </div>
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
