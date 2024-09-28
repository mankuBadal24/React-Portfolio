/* eslint-disable no-unused-vars */
import React from 'react'
import { ContactTab } from './ContactTab'
import { ProfileImg } from './profileImg'
import img from "../assets/profilepic.png"
import './profile.css'

export const Profile = () => {
  return ( 
  <>
    <div className="profile-container">
      <div className="profile-image-container">
        <ProfileImg img={img} name="Mayank Badal" role="Software developer"/>
        <hr />
      </div>
      <ContactTab/>
    </div>
  </>
  )
}
