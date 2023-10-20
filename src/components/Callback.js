import React, { useState } from 'react'
import '../styles/result.css'
import {GiCrossMark} from 'react-icons/gi'
import {GoVerified} from 'react-icons/go'
import axios from 'axios'

const Callback = ({open,setOpen,openVerify,setOpenVerify,openLoad,setOpenLoad}) => {

    const [details,setDetails] = useState({
        username:"",
        num : "",
    })

    const handleChange = (e) => {
        setDetails({...details,[e.target.name]:e.target.value})
    }
    const sendCall = async (e) => {
        
        e.preventDefault()
        
        if((details.username).length<3) // validating the length of the username
        {
            alert("Username must be characters and more than 3 chars")
        }
        else if(!(details.num).match(/\d{10}/)) // validating phone num
        {
            alert("Mobile number must be equal to 10 digits")
        }
        else{
            setOpen(!open)
            setOpenLoad(!openLoad)

            // sending call back details to backend
            await axios.post(
                'https://anchorsbackendservice.onrender.com/sendmail',
                {
                    details,
                },
            ).then((res) => {
                setOpenLoad(false)
                setOpenVerify(!openVerify)
            })
        }
        

        
    }
  return (
    <div className='callback-con'>
     
            <form onSubmit={(e) => {sendCall(e)}}>
                <div >
                    <label>Request a callback</label>
                    <GiCrossMark style={{position:'absolute',right:'10',top:'10',cursor:'pointer'}} onClick={() => {setOpen(!open)}}/>
                </div>
                <input type='text' name='username' placeholder='Enter your name' value={details.username} onChange={(e) => {handleChange(e)}}/>
                <input type='tel' name='num' placeholder='Enter your mobile number' value={details.num} onChange={(e) => {handleChange(e)}}/>
                <button type='submit'>Request</button>
            </form>
        
        
    </div>
  )
}

export default Callback