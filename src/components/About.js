import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <>
    <section className='about' id='About'>
            <div className='container'>
                <div className='aboutTitle'>
                  <h1>About me</h1>
                </div>
                <div className='aboutMain'>
                  <div className='aboutImage'>
                  </div>
                  <div className='aboutText'>
                    <p>Enthusiast  Web developer focused in React Front-end. I have a strong understanding of web standards and best practices to develop websites with high dedication.</p>
                    <p>Some of my skills:</p>
                    <br/>
                    <div className='skills'>
                      <i className="fa-brands fa-html5"></i>
                      <i className="fa-brands fa-css3"></i>
                      <i className="fa-brands fa-sass"></i>
                      <i className="fa-brands fa-bootstrap"></i>
                      <i className="fa-brands fa-js"></i>
                      <i className="fa-brands fa-react"></i>
                      <i className="fa-solid fa-database"></i>
                      <i className="fa-brands fa-php"></i>
                      <i className="fa-brands fa-git-alt"></i>
                    </div>
                    
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About