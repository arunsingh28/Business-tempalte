import React from 'react'
import nextArrow from '../../icons/arrow.svg'
export const Card = ({ title, desc, src, argb }) => {
    return (
        <div className={argb ? 'argb' : 'none'}>
            <img src={src} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>
                <img src={nextArrow} height="20" />
            </button>
        </div>
    )
}
