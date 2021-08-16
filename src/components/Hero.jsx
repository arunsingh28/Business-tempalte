import React from 'react'
import '../style/Hero.scss'

export const Hero = () => {
    return (
        <section className="section_1">
            <div className="hemi__"></div>
            <div className="_title">
                <h1>Your marketing<br />consultant.</h1>
            </div>
            <div className="_desc">
                <p>We meet different humanoid <br />
                    beings your Business
                </p>
            </div>
            <div className="_navigate">
                <button className="cyl">Free consultation</button>
                <button className="circle">▷</button> <span className="sm__">See video</span>
            </div>
            <div className="Limg">
                {/* <img src="https://ouch-cdn2.icons8.com/EBIlTGzhd982P8wVdUxu6UCb7N9FrkOzZPVKkwAvn5Y/rs:fit:646:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODE3/L2Q3MGVhZTA4LTIy/Y2YtNGQxZi04ZWVj/LTEzYzY4YzBmZWE2/MS5zdmc.png"/> */}
            </div>
        </section>
    )
}
