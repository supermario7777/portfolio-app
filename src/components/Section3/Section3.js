import React from 'react'
import './index.css'
import { SECTION3_IMG } from '../Images'
import { Element } from 'react-scroll'

export default function Section3() {
    return (
        <Element name="section3" className="section">
        <div className='Section3'>
            <div>
                <h1>About me</h1>
                <p>I’m software developer and this is my portfolio.
                    I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                <div>
                    <ul>
                        <li className='section3-li'>Lorem Ipsum Description Text</li>
                        <li className='section3-li'>Lorem Ipsum Description Text</li>
                    </ul>
                    <ul>
                        <li className='section3-li'>Lorem Ipsum Description Text</li>
                        <li className='section3-li'>Lorem Ipsum Description Text</li>
                    </ul>
                </div>
            </div>
            <img src={SECTION3_IMG} alt='SECTION3_IMG'></img>
        </div>
        </Element>
    )
}
