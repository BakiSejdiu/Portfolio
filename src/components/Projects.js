import React from 'react'
import '../styles/Projects.css'

function Projects() {
return (
    <>
        <section className='projects' id='Projects'>
            <div className='container'>
                <div className='projectsTitle'>
                    <h1>Projects</h1>
                </div>
                <div className='projectsContent'>
                <div className='firstProject'>
                        <img src='images/portfolio.svg' alt="portfolio"/>
                        <br/>
                        <h2>Portfolio</h2>
                        <div className='hoverText'>
                            <h3>Personal Portfolio - Baki Sejdiu</h3>
                            <p>
                                <a href='https://github.com/BakiSejdiu/Portfolio' target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                
                                <a href='https://bakisejdiu.netlify.app' target="_blank" rel='noopener noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </p>
                        </div>
                    </div>
                    
                    <div className='firstProject'>
                        <img src='images/project1.svg' alt="crypto"/>
                        <br/>
                        <h2>CryptoKs Website</h2>
                        
                        <div className='hoverText'>
                            <h3>CryptoKs - Website for cryptocurrency</h3>
                            <p>
                                <a href='https://github.com/BakiSejdiu/kscrypto' target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                
                                <a href='https://cryptoks.netlify.app' target="_blank" rel='noopener noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </p>
                        </div>
                    </div>
                    
                    <div className='firstProject'>
                        <img src='images/project2.svg' alt="covid"/>
                        <br/>
                        <h2>Covid-19 Case Tracker</h2>
                        <div className='hoverText'>
                            <h3>Covid-19 case tracker using Api</h3>
                            <p>
                                <a href='https://github.com/BakiSejdiu/Covid-19-Case-Tracker' target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                
                                <a href='https://github.com/BakiSejdiu/Covid-19-Case-Tracker' target="_blank" rel='noopener noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </p>
                        </div>
                    </div>
                    <div className='firstProject'>
                        <img src='images/project3.svg' alt="weather"/>
                        <br/>
                        <h2>Weather App</h2>
                        <div className='hoverText'>
                            <h3>React app weather using API consumption</h3>
                            <p>
                                <a href='https://github.com/BakiSejdiu/React-App-Weather' target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                
                                <a href='https://apicurrentweather.netlify.app/' target="_blank" rel='noopener noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </p>
                        </div>
                    </div>
                    <div className='firstProject'>
                        <img src='images/project4.svg' alt="delivery"/>
                        <br/>
                        <h2>Delivery webpage</h2>
                        <div className='hoverText'>
                            <h3>Delivery Home - Webpage project with HTML5 and CSS3</h3>
                            <p>
                                <a href='https://github.com/BakiSejdiu/Project-Html5-Css3' target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                
                                <a href='https://deliveryhome.netlify.app/' target="_blank" rel='noopener noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </p>
                        </div>
                    </div>
                    <div className='firstProject'>
                        <img src='images/project5.svg' alt="calc"/>
                        <br/>
                        <h2>Converter calculator</h2>
                        <div className='hoverText'>
                            <h3>Converter calculator - converts temperature(Celsius - Fahrenheit) and Weight(Kg - Lbs)</h3>
                            <p>
                                <a href='https://github.com/BakiSejdiu/Converter-calculator' target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                
                                <a href='https://github.com/BakiSejdiu/Converter-calculator' target="_blank" rel='noopener noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects