
import React, { useState } from 'react'
import '../../style/navbar.scss'
import menu from '../../icons/menu.svg'
import close from '../../icons/close.svg'
const Index = () => {
    let [open, setOpen] = useState(false)

    return (
        <nav className="nav">
            <div className="brand_name"><span>Elliott</span></div>
            <div className={open ? 'smMenu' : 'menu'}>
                <ul className={open ? 'smLi' : ''}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Prices</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="lr">
                <button className="login_btn">Login 👉</button>
                <button className="menu_btn" onClick={() => {
                    setOpen(!open)
                }}>
                    <img src={open ? close : menu} alt="menu" />
                </button>
            </div>
        </nav>
    )
}

export default Index
