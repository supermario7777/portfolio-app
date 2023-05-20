import React from 'react'
import './index.css'
import Experience from './Experience/Experience'
import { Element } from 'react-scroll'

export default function Section4() {
    const experience = [
        {
            year: '2021-2022',
            role: 'The Role at the Company',
            country: 'Country',
            city: 'City',
            description: "I’m software developer and this is my portfolio.I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.",
        },
        {
            year: '2021-2022',
            role: 'The Role at the Company',
            country: 'Country',
            city: 'City',
            description: "I’m software developer and this is my portfolio.I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.",
        },
        {
            year: '2021-2022',
            role: 'The Role at the Company',
            country: 'Country',
            city: 'City',
            description: "I’m software developer and this is my portfolio.I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.",
        }
    ]



    return (
        <Element name="section4" className="section">
            <div className='Section4'>
                <h1>Experience</h1>
                {experience.map((item, index) => {
                    return <Experience item={item} key={index} />
                })}
            </div>
        </Element>
    )
}
