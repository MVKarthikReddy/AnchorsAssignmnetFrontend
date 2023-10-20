import React from 'react'
import {GiCrossMark} from 'react-icons/gi'
import {GoVerified} from 'react-icons/go'
import '../styles/result.css'
import { useNavigate } from 'react-router-dom'
const VerifiedCallback = ({openVerify,setOpenVerify}) => {

  const navigate = useNavigate()
    const mainPage = () => {

      navigate('/') // navigating to main page
        
    }
  return (
    <div className='callback-con'>

            <form style={{height:'300px'}} onSubmit={() => {mainPage()}}>
                <div >
                    <label><GoVerified style={{fontSize:'230%',color:'green'}}/></label>
                    <GiCrossMark style={{position:'absolute',right:'10',top:'10',cursor:'pointer'}} onClick={() => {setOpenVerify(false)}}/>
                </div>
                <label>Request a call back</label>
                <div style={{width:'100%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <p>Our Team will call you shortly in 12-24 hrs</p>
                    <p>can't you wait for call?</p>
                </div>
                <button type='submit' style={{width:'70%'}}>Check another video -></button>
            </form>

    </div>
  )
}

export default VerifiedCallback