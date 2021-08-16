import React from 'react'
import '../style/Testimonial.scss'
import arrow from '../icons/arrow1.svg'
import star from '../icons/star.svg'

export const Testimonial = () => {
    return (
        <div className="_testimonial">
            <h1>Love from all around <br />the world</h1>
            <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit Repudiandae <br /> beatae magnam tempora id ipsam ratione.</p>
            <div className="main_wrapper">
                <button>
                    <img src={arrow} alt="arrow" className="left"/>
                </button>
                <div className="__testi">
                    <Test message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem et doloremque, nemo quis sequi nihil vitae dolor, fuga corrupti nulla exercitationem possimus? Quaerat sit harum minima aut blanditiis consectetur." name="Arun pratap singh" occupation="Developer" img="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <Test message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem et doloremque, nemo quis sequi nihil vitae dolor, fuga corrupti nulla exercitationem possimus? Quaerat sit harum minima aut blanditiis consectetur." name="Jon Doe" occupation="Business" img="https://images.pexels.com/photos/5262459/pexels-photo-5262459.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    {/* <Test message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem et doloremque, nemo quis sequi nihil vitae dolor, fuga corrupti nulla exercitationem possimus? Quaerat sit harum minima aut blanditiis consectetur." name="Jon Doe" occupation="Business" img="https://images.pexels.com/photos/5262459/pexels-photo-5262459.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
                </div>
                <button>
                    <img src={arrow} alt="arrow" className="right"/>
                </button>
            </div>
        </div>
    )
}


const Test = ({ message, name, occupation, img }) => {
    return (
        <div className="__mainBox">
            <div className="flexBox">
                <img className="user" src={img} alt="person image" />
                <div className="flexBox">
                    <img className="star" src={star} alt="star" />
                    <span>5.0</span>
                </div>

            </div>
            <h3>{name}</h3>
            <span>@ {occupation}</span>
            <p>{message}</p>
        </div>
    )
}