import React from 'react'
import '../styles/Contact.css'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className="contactme__section">
    <div className="contactme__con">
        <h3 className='contact__header'>let's work together</h3>
        <a href="" className='contact'> 
        <span>-</span>
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
        <span>-</span>
        </a>
         
    </div>

    <div className="social_media_contact_con">
            <ul className='social__media__list'>
                <li className="media_list"><NavLink className="mLink" to="/">twitter</NavLink></li>
                <li className="media_list"><NavLink className="mLink">linkedIn</NavLink></li>
                <li className="media_list"><NavLink className="mLink">Gmail</NavLink></li>
                <li className="media_list"><NavLink className="mLink">GitHub</NavLink></li>
            </ul>
            <p>Designed and Developed by Adebusola</p>
        </div>
    </div>

    </>
  )
}

export default Contact