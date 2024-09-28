// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
export const PortfolioTab = ({ link,img, title, description }) => {
    return (
        <>
            <div className="project">
                <a href={link} target='blank'>
                    <div className="project_image">
                        <img src={img} alt="image of project" />
                    </div>
                    <div className="project_info">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div></a>
            </div>
        </>
    )
}
