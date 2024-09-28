/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Connect.css"
export const Connect = ({icon,title,link,desc}) => {
  return (
    <>
        <div className="container">
            <div className="icon">{icon}</div>
            <div className="content">
                <h3>{title}</h3>
                <a href={link} target='blank'>{desc}</a>
            </div>
        </div>

    </>
  );
};

export const Social=({link,icn})=>{
  return(
    <div className="social">
    <a href={link} target='blank'> {icn}</a>
    </div>
  )
}
