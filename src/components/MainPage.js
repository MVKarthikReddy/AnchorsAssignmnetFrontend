import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/main.css'
import { useNavigate } from 'react-router-dom'
import {RingLoader} from 'react-spinners'

const MainPage = () => {

    const navigate = useNavigate()

    const [open,setOpen] = useState(false)

    const [url, setUrl] = useState("")

    const getResult = async () => {

        const id = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        const vid_id = (url.match(id))

        if(vid_id==null)
        {
            alert('please provide a valid youtube video url')
        }
        else{
           setOpen(!open)
           try{
                // 
                await axios.post(
                    'http://localhost:5002/',
                    {
                        url:url,
                    },
                ).then((res) => {
                    localStorage.setItem('response_data',JSON.stringify(res.data)) // Storing response data in local storage
                    navigate('/request-call') // Navigating to Result Page
                })
           }catch(err){
                console.log(err)
           }
        }
        
    }


  return (
    <>
    {   !open && <div className='main-con'>
                <div className='main-text'>
                    <p>Hey there,<br></br>Provide the link and estimate the youtube video the income</p>
                </div>
                <div className='main-comp'>
                    <input type='text' placeholder='place the youtube video url here' onChange={(e) => {setUrl(e.target.value)}}/>
                    <button onClick={() => {getResult()}} >Submit</button>
                </div>
                
            </div>
    }
    {open && <RingLoader color="#ff1717" style={{position:'absolute',top:'40%',left:'45%'}}/>}
    </>
  )
}

export default MainPage