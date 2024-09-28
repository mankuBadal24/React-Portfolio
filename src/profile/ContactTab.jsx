// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Connect.css"
import { Connect } from './Connect'
import { Social } from './Connect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faG } from '@fortawesome/free-solid-svg-icons'




export const ContactTab = () => {
  return (
    <>
      <Connect icon= {<FontAwesomeIcon icon={faEnvelope} />} title="email" link="mailto:badalmayank23@gmail.com" desc="badalmayank23@gmail.com"/>
      <Connect icon= {<FontAwesomeIcon icon={faPhone} />} title="phone"  link="tel:8595810297" desc="+91-8595810297"/>
      <Connect icon= {<FontAwesomeIcon icon={faCalendarDays} />} title="birthday"  desc="September 24,2003"/>
      <Connect icon= {<FontAwesomeIcon icon={faLocationDot} />} title="location" link="https://www.google.com/maps/@28.6478705,77.4453687,16z?authuser=0&entry=ttu" desc="Ghaziabad UP"/>
      <Connect icon= {<FontAwesomeIcon icon={faG} />} title="GFG Platform " link="https://www.geeksforgeeks.org/user/badalmakqb2/" desc="Profile"/>

      <div className="socialTab">
        <Social icn={<FontAwesomeIcon icon={faLinkedin} />} link="https://www.linkedin.com/in/mayank-badal/"/>
        <Social icn={<FontAwesomeIcon icon={faInstagram}  />} link="https://www.instagram.com/manku_2401/"/>
        <Social icn={<FontAwesomeIcon icon={faGithub} />} link = "https://github.com/mankuBadal24"></Social>
      </div>
    </>
  )
}
