import React from 'react'
import '../../style/navbar.scss'
const Index = () => {
    return (
        <nav className="nav">
            <div className="brand_name"><span>Elliott</span></div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Prices</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="lr">
                <button>Login</button>
            </div>
        </nav>
    )
}

export default Index
