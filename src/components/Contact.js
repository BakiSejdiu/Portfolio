import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <>
        <section className='contacts' id='Contact'>
            <div className='container'>
                <h1>Contact</h1>
                <div className='contactInfo'>
                    <p>
                    <a href="mailto:bakisejdiu2@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    Email
                    <a href="https://github.com/BakiSejdiu" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    Github
                    <a href="https://www.linkedin.com/in/bakisejdiu" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    Linkedin
                    
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact