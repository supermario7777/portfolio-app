import React from 'react'
import './index.css'
import { SECTION7_IMG } from '../Images'

export default function Section7() {
    return (
        <div>
            <div className='Section7'>                
                <div>
                    <h1>Project Name</h1>
                    <p>I’m software developer and this is my portfolio.
                        I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                    <ul>
                        <li className='section7-li'>Lorem Ipsum Description Text</li>
                        <li className='section7-li'>Lorem Ipsum Description Text</li>
                    </ul>
                </div>
                <img src={SECTION7_IMG} alt='SECTION7_IMG' style={{width: '626px', height: '388px'}}></img>
            </div>
        </div>
    )
}
