import React,{useState,useEffect} from 'react'
import '../styles/navbar.css'
import {AiOutlineYoutube} from 'react-icons/ai'
const Navbar = () => {  

  const [open,setOpen] = useState(false)
  useEffect(() => {
    // localStorage.setItem('open',open)
    setOpen(localStorage.getItem('open'))
    console.log(open)
},[])

  return (
    <div className='navbar-con'>
        <div className='nav-logo'>
            <AiOutlineYoutube color='#ff5f70' size={35}/>Income Estimator
        </div>
    </div>
  )
}

export default Navbar