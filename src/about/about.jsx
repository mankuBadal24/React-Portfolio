// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Title } from './title'
import { Desc } from './desc'
import { WorkComponent } from './workComponent'
import img from "../assets/image.png"
import img2 from "../assets/web-development.png"
import img3 from "../assets/android.png"
import img4 from "../assets/java_img.png"
import img5 from "../assets/spring_icon.png"



export const About = () => {
  return (
    <div className="about">
     <Title title={"about me"}/>   
     <hr />
    <Desc desc={"Hello! I'm Mayank Badal, a passionate Web Developer , Java Developer and Android Developer With a strong foundation in both front-end and back-end development, I specialize in creating seamless, user-friendly web experiences. My journey in the tech world began with a fascination for how things work on the internet, and over the years, this curiosity has evolved into a fulfilling career."} />
    <Title title={"What I'm Doing"}/>
    <hr />
    <div className="work">
    <WorkComponent icon={img} title="web design" desc="the most modern and high-quality design made at a professional level"/>
    <WorkComponent icon={img2} title="web developer" desc="High quality development of sites at the professional level"/>
    <WorkComponent icon={img3} title="Android Developer" desc="the interface and Back-End development in JAVA and FLUTTER both at a professional level"/>
    <WorkComponent icon={img4} title="java developer" desc="developing web apps in Java with OOPs concepts at a professional level"/>
    <WorkComponent icon={img5} title="Spring Boot" desc="developing microservices & REST Apis in Java "/>
    </div>
    
    </div>
   )
}
