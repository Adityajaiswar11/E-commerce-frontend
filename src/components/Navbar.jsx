/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
    const [first, setFirst] = useState('shop')
   

  return (
    <div className=' bg-[#2c2b2b] opacity-90 relative'>
          <nav className=' flex justify-between items-center mx-auto w-11/ h-16 p-5 text-white'>
               <div className=' flex justify-between items-center gap-2'>
                 <Link to='/'>
                 <img src="/images/logo.png" alt="logo"  className=' w-10 ml-4 rounded-full'/>
                 </Link>
                  <Link to='/' className=" text-2xl first-letter:text-orange-400 font-bold">Easyshop</Link>
                 
               </div>  

               <ul className=' flex justify-between items-center gap-9 cursor-pointer
               text-lg '>
                  <li>
                      <Link to='/' onClick={()=>{setFirst('shop')}} >Shop{first==='shop'?<hr/>:<></>}</Link>  
                  </li>

                  <li>
                      <Link to='/product' onClick={()=>{setFirst('product')}}>Products{first==='product'?<hr/>:<></>}</Link>  
                  </li>

                  <li>
                      <Link to='/about' onClick={()=>{setFirst('about')}}>About{first==='about'?<hr/>:<></>}</Link>  
                  </li>

                  <li>
                      <Link to='/contact' onClick={()=>{setFirst('contact')}}>Contact Us{first==='contact'?<hr/>:<></>}</Link>  
                  </li>

                  <li className=' flex justify-between items-center flex-row-reverse bg-[#dbb734] rounded-md 
                  px-2 gap-2'>
                        <Link to='/cart'>
                          <img src="/public/images/cart.jpg" alt="" className=' w-9 rounded-lg px-1' />
                        </Link>
                        <span>10</span>

                  </li>
               </ul>
          </nav>

          <Outlet/>
    </div>
  )
}

export default Navbar