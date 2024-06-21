import React from 'react'
import { Outlet } from 'react-router'
import { Link,NavLink } from 'react-router-dom'

interface Props{}

const NavBar = (props : Props) => {
  return (
    <div>
      
      <div className=' w-full bg-red-800 lg:h-[60px]  max-lg:h-[90px]  '>
        <div className=' flex flex-wrap max-lg:justify-around py-3 lg:px-4   lg:gap-[140px]'>
        <div className=' '>
            <h1 className=' text-white font-bold text-xl'>e-hospital</h1>
           </div>
           <div className=' max-lg:hidden  '>
            <ul className='flex gap-8   justify-center text-white '>
            <li className= '   h-7 w-[100px] flex col-span-2 gap-2  mt-1   '><NavLink to='/' className={({ isActive }) => isActive ? 'navbaractive' : 'flex gap-2'} >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>            
             
               Dashboard  </NavLink >
                   </li>
               <li className= '   h-7 w-[100px] flex col-span-2 gap-2  mt-1   '> <NavLink to='/request' className={({ isActive }) => isActive ? 'navbaractive' : 'flex gap-2'} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                          
                           Requests  </NavLink ></li>
                
               <li className= '   h-7 w-[120px] flex col-span-2 gap-2  mt-1    '>  <NavLink to='/feedback' className={({ isActive }) => isActive ? 'navbaractive' : 'flex gap-2'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

   
     Feedbacks  </NavLink></li>
                
               <li className= '   h-7 w-[100px] flex col-span-2 gap-2  mt-1 px-2   '><NavLink to='/report' className={({ isActive }) => isActive ? 'navbaractive' : 'flex gap-2'} ><svg className="size-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="3" width="14" height="18" rx="2" />  <line x1="9" y1="7" x2="15" y2="7" />  <line x1="9" y1="11" x2="15" y2="11" />  <line x1="9" y1="15" x2="13" y2="15" /></svg>
     
     Reports  </NavLink></li>
                
               <li className= '   h-7 w-[100px] flex col-span-2 gap-2  mt-1   '>  <NavLink to='/compon' className={({ isActive }) => isActive ? 'navbaractive' : 'flex gap-2'} ><svg className="size-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
   
               profile  </NavLink></li> 
               <li className= '   h-7 w-[120px] flex col-span-2 gap-2  mt-1   relative group '><svg className="size-6 "  width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
     <a>
     Settings  </a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

<ul className='  absolute    bg-red-700 top-7  left-0 hidden group-hover:block    w-full'>
                    
                    <li className=' hover:bg-red-300 h-[20px]'><Link to={""}>HOME  </Link></li>
                    <li className=' hover:bg-red-300 '><Link to={""}>HOME</Link></li>
                    <li className=' hover:bg-red-300'><Link to={""}>HOME</Link></li>
                    <li className=' hover:bg-red-300'><Link to={""}>HOME</Link></li>
                    </ul>

 </li>
    
            </ul>
           </div>
           <div className=' flex justify-items-end'>
           <div className='flex justify-end lg:gap-7  max-lg:gap-2 text-white '>
           <svg className=" size-7"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
</svg>

<svg className=" size-7"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  <path d="M13.73 21a2 2 0 0 1-3.46 0" /> </svg>
          <h1 className=' text-[20px]'>|</h1>
          <h1 className=' text-xs'> welcome <br/>admin</h1>
          <img src='https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0' alt='' className=' rounded-full  h-10 w-10' />
           </div>
           </div>
          
        </div>
           
           
      </div>
      <Outlet/>
    </div>
  )
}

export default NavBar