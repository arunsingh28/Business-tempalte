import React from 'react'
import nextArrow from '../../icons/arrow.svg'
export const Card = ({ title, desc, src, argb, color }) => {
    return (
        <div className={argb ? 'argb' : 'none'}>
            <img src={src} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <button style={{ 'background': color ? '#1d306547' : 'none' }}>
                <img src={nextArrow} height="20" />
            </button>
        </div>
    )
}
