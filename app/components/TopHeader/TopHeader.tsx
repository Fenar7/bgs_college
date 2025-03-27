import React from 'react'
import './tohead.css'

const TopHeader = () => {
  return (
    <div className='top-header-container flex items-center justify-center'>
        <div className='top-header container mx-auto flex items-center justify-between'>
            <div className="left-contact-container flex items-center">
            <div className="left-contact flex items-center">
                <img src='/images/email-top.svg'></img>
                <p>info@bgscollege.com</p>
            </div>
            <div className="left-contact flex items-center">
                <img src='/images/call-top.svg'></img>
                <p>+91 123 456 789</p>
            </div>
            </div>

            <div className="right-contact-container flex items-center">
                <div className="social-icons flex items-center">
                    <img src="/images/fb-top.svg" alt="" />
                    <img src="/images/insta-top.svg" alt="" />
                    <img src="/images/whatsapp-top.svg" alt="" />
                    <img src="/images/twitter-top.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader