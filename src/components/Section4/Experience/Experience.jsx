import React from 'react'
import './index.css'

export default function Experience({item, index}) {
  console.log(item)
  return (
    <div className='Experience'>
      <p className='year'>{item.year}</p>
      <div className='role-country-description'>
        <li className='role'>{item.role}</li>
        <p className='country'>{item.country}, {item.city}</p>
        <p className='description'>{item.description}</p>
      </div>
    </div>
  )
}
