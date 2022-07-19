import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import '../styles/Home.css'

function Home() {
  return (
    <>
        <section className="mainContent" id='Home'>
            <div className='container'>
                <div className='mainText'>
                    <h1>Baki Sejdiu</h1>
                    <p>Hi, I am Baki! <br />
                    I am that Web developer you are looking for!</p>
                </div>
                <div className='mainImage'></div>
            </div>
        </section>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default Home