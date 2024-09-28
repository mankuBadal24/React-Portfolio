// import React from 'react'
import './profileImg.css'
// eslint-disable-next-line react/prop-types
export const ProfileImg = ({img,name,role}) => {
  return (
    <>
    <div className="img-logo">
        <img src={img} alt="profile image" />
    </div>
    <div className="profile-name">
        <h1>{name}</h1>
    </div>
    <div className="role">
        <h2>{role}</h2>
    </div>
    </>
  )
}