import React from 'react'
import '../style/Section3.scss'

export const Section = () => {
    return (
        <div className="_section3">
            <div className="imgSide">
                <div className="_bg_layer">
                    {/* <img src="https://ouch-cdn2.icons8.com/YxCLR2NXFAkrkB7oaFPkusc_HnR0M8_rRa0BrbR7ugY/rs:fit:951:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjM2/LzQxNDc0ZWZkLTdl/M2MtNGJlOS05NDJh/LTkxOWQ2MTliZTg0/OS5zdmc.png" /> */}
                    <img src="https://ouch-cdn2.icons8.com/APKQEFHAL8JHUqfpQVBemrL2gHA7zYz-S8wp5wQ-ok8/rs:fit:1373:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQv/OGU3NjZjYWUtOGY4/Ni00YzYwLTkwZDgt/OTE0YTVkZmYxYTM0/LnBuZw.png" alt="img" />
                </div>
                <img src="https://ouch-cdn2.icons8.com/0TJ-KgEwhBxNpfx0edCWx2QoXzeb00oCw2yRb1wENIg/rs:fit:822:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDM0/LzBkNTRiZGM4LWZi/MTktNDVkYy1hNTRj/LTNiMzMxMmRmNzM1/NC5zdmc.png" alt="image" />
            </div>
            <div className="contentSide">
                <h1>We build business with right way</h1>
                <p className="para">For far away the word mountains, for from the <br />
                    countries Vokalia and Consonantia, there live the bind texts. <br />
                    Separated they live in Bookmarksgrove right at.
                </p>
                <Info heading="Statics innovations" desc="cras matis consectetur pursus sit amet. Aenean lavinia bibendum mulla sed." />
                <Info heading="Consulting and advisory" desc="Nullo vitaw wlist libero pharetro eugue dapibus Prasent commando cursus." />
            </div>
        </div>
    )
}


const Info = ({ heading, desc }) => {
    return (
        <div className="_infoWrapper">
            <div className="_infoARGB"></div>
            <div className="inner">
                <h3>{heading}</h3>
                <p className="p_">{desc}</p>
            </div>
        </div>
    )
}