// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Title } from '../about/title'
import { PortfolioTab } from './portfolioTab'
import './portfolio.css'
// import img from '../assets/androidweather.jpg'
import img1 from '../assets/calculatorWeb.png'
import img2 from '../assets/portfolio.png'
// import img3 from '../assets/kavyanjali.png'
import img4 from '../assets/todo.png'
import img5 from '../assets/weatherWeb.png'







export const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <Title title={"Web Projects"} />
                <hr />
                <div className="portfolio-content">
                    {/* <PortfolioTab link="https://twogoodco21.netlify.app/" img={img} title="Two Good Co" description="It's basically a clone website of two good co. in this project i use GSAP library for animation and locomotivejs for smooth scrolling." /> */}
                    <PortfolioTab link="https://mankubadal24.github.io/My_portfolio/#home" img={img2} title="Portfolio" description="This portfolio website is creating using HTML, CSS and JS"/>
                    {/* <PortfolioTab link="#" img={img3} title="Kavyanjali" description="this project is not completed yet!"/> */}
                    <PortfolioTab link="https://mankubadal24.github.io/to_do_list/" img={img4} title="Todo" description="It's a todo web app which is designed to add your todo task using HTML, CSS, JS"/>
                    {/* <PortfolioTab link="https://to-do21.netlify.app/" img={img5} title="Todo" description="It's a Age calculator web app which is designed to calculate your age. it created by  hTML, CSS, JS"/> */}
                    <PortfolioTab link="https://mankubadal24.github.io/Bharat-intern-tasks/" img={img5} title="Weather Web App" description="It's a Weather web app which is designed for providing important information during extreme weather events."/>
                    <PortfolioTab link="https://mankubadal24.github.io/calculator_web_app/" img={img1} title="Web Calculator" description="It's basically a Calculator which perform basic maths calculations. this project is create using hTML, CSS and JS"/>
                    
                </div>
                {/* <Title title={"Android Projects"}/>
                <hr />
                <div className="portfolio-content">
                <PortfolioTab link="https://github.com/mankuBadal24/Weather_android_app" img={img5} title="Android Weather App" description="It's a Weather Android app which is designed for providing important information during extreme weather events."/>
                </div> */}
                
            </div>
        </>
    )
}