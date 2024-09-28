/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './section.css'
export const WorkComponent = ({icon,title,desc}) => {
  return (
    <>
        <div className="section">
            <div className="icon"><img src={icon} alt="" srcSet="" /></div>
            <div className="content">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            </div>
        </div>
    </>
  )
}
