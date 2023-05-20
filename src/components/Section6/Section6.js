import React from 'react'
import './index.css'
import { SECTION6_IMG } from '../Images'

export default function Section6() {
    return (
        <div className='Section6'>
            <img src={SECTION6_IMG} alt='SECTION6_IMG'></img>
            <div>
                <h1>Project Name</h1>
                <p>I’m software developer and this is my portfolio.
                    I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                <ul>
                    <li className='section6-li'>Lorem Ipsum Description Text</li>
                    <li className='section6-li'>Lorem Ipsum Description Text</li>
                </ul>
            </div>
        </div>
    )
}
