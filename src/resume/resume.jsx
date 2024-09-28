// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Title } from '../about/title'
import { Education, EducationHead } from './education'
import img from "../assets/open-book.png"
import './resume.css'


export const Resume = () => {
  return (
        <div className="resume">    
            <Title title={"resume"}/>   
            <hr />
            <div className="resume_content">
                <EducationHead img={img} subTitle="Education" />
                <ul>
                    <li>
                    <Education name="Hi-tech Institute of Engineering & Technology Ghaziabad" year='2021-2025' about="Currently I am pursuing bachelor's of degree in computer science in Final year."/>

                    </li>
                    <li>
                    <Education name="DHRT Saraswati Vidya Mandir Nehru Nagar ghaziabad" year="2019" about="10th standard from central board of secondary education -- (88%)"/>

                    </li>
                    <li>
                    <Education name="DHRT Saraswati Vidya Mandir Nehru Nagar ghaziabad" year="2021" about="12th standard from Central Board of secndary education -- (76%)"/>

                    </li>
                </ul>
                <EducationHead img={img} subTitle="Experience" />
                <ul>
                    <li><Education name="codSoft" about="Internship as Java Developer"/></li>
                    <li><Education name="CRIS" about="6 month internship in Flutter" /></li>
                    <li><Education name="codealpha" about="3 month internship as java developer"></Education></li>
                </ul>
            </div>
        </div>
    )
}
