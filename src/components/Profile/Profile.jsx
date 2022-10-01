import React from 'react'
import { userSelector } from '../../features/auth'
import { useSelector } from 'react-redux'


const Profile = () => {

  const {user}=useSelector(userSelector);
  console.log(user);
  return (
    <div> 
    <h3 style={{textTransform:'uppercase',color:'gray',}}>Profile</h3>
    <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
      {
        <>
       
        <h1 style={{color:'gray',gap:'2px',fontSize:'15px',textIndent:'10px',wordSpacing:'10px',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>Username:- </h1>
       
                    {
                          user.username
                    }
       
       
        </>
      }
      </div>
    </div>
  )
}

export default Profile
