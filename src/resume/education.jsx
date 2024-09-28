/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Education = ({ name, year, about }) => {
  return (
    <div className="education">

      <div className="education_item">
        <div className="head">
          <h3>{name}</h3>
          <h4>{year}</h4>
        </div>
        <p>{about}</p>

      </div>
    </div>
  )
}
export const EducationHead = ({ img, subTitle }) => {
  return (
    <div className="heading">
      <img src={img} alt="" />
      <h2>{subTitle}</h2>
    </div>
  )
}