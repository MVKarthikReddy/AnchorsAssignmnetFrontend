import React, { useEffect, useState } from 'react'
import '../styles/result.css'
import {AiFillEye,AiFillLike,AiOutlineComment } from 'react-icons/ai'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import Callback from './Callback'
import VerifiedCallback from './VerifiedCallback'
import {RingLoader} from 'react-spinners'

const ResultPage = () => {

  const [details,setDetails] = useState("")
  const [income,setIncome] = useState(0)
  const [open,setOpen] = useState(false)
  const [openVerify,setOpenVerify] = useState(false)
  const [openLoad,setOpenLoad] = useState(false)


  const fetchDetails = () => {
    const r = JSON.parse(localStorage.getItem('response_data'))
    setDetails(r)
    const x = Math.min(r.statistics.viewCount,r.subsCount)
    const i = 0.25*x+(0.5*r.statistics.commentCount)+(0.5*r.statistics.likeCount) // calculating amount for the video
    setIncome(i)
  }

  useEffect(() => {
    fetchDetails()
  },[])
  if(details=="")
  {
    return(
      <>
        <p style={{fontFamily:'cursive',fontSize:'200%'}}>Loading...</p>
      </>
    )
  }
  else{
    return (
      <div className='result-page'>
        <div className='navbar-mailbox' onClick={() => {
                                                          setOpen(!open)
                                                          setOpenVerify(false)
                                                        }}>
          Request a call
        </div>
        <div className='result' >
          <div className='result-con' >
            <div className='vid-thumbnail' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img src={details.thumbnail} alt='no img' style={{backgroundRepeat:'none',width:'100%',height:'160%',borderRadius:'20px'}}/>
            </div>
            <div className='vid-details'>
              <label style={{width:'100%',fontFamily:'Cursive',color:'orange',fontSize:'120%',paddingBottom:'13px'}}>{details.title}</label>
              <label><AiFillEye /><span>{details.statistics.viewCount}</span></label>
              <label><AiFillLike /><span>{details.statistics.likeCount}</span></label>
              <label><AiOutlineComment /><span>{details.statistics.commentCount}</span></label>
            </div>
            <div className='vid-income'>
              <div style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'20px',fontFamily:'Cursive',fontSize:'110%'}}>
                <FaIndianRupeeSign />{income}
              </div>
              <div>Check now?</div>
            </div>
          </div>
        </div>
        <div className='callback'>
          { open && <Callback open={open} setOpen={setOpen} openVerify={openVerify} setOpenVerify={setOpenVerify} openLoad={openLoad} setOpenLoad={setOpenLoad}/>}
          { openLoad && <div className='callback-con'><RingLoader color="#ff1717" size={40} style={{position:'absolute',top:'40%',left:'45%'}}/></div> }
          { openVerify && <VerifiedCallback openVerify={openVerify} setOpenVerify={setOpenVerify} />}
        </div>
      </div>
    )
  }
}

export default ResultPage