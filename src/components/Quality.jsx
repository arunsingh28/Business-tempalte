import React from 'react'
import '../style/Quality.scss'
import app from '../icons/app.svg'
import web from '../icons/website.svg'
import media from '../icons/media.svg'
import market from '../icons/market.svg'

export const Quality = () => {
    return (
        <div className="_quality">
            <div className="contentSide__">
                <h1>We provide exclusive <br />marketing service</h1>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, officia reprehenderit autem animi inventore in totam at asperiores, cumque voluptatem ipsum reprehenderit autem animi inventore in totam at asperiores, cumque voluptatem ipsum</p>
                <div className="grid">
                    <Subdetail title="Media marketing" img={app} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <Subdetail title="Web development" img={web} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <Subdetail title="App develoment" img={media} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    <Subdetail title="Product engineering" img={market} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </div>
            </div>
            <div className="imgSide__">
                <div className="__layer02">
                    <img src="https://ouch-cdn2.icons8.com/APKQEFHAL8JHUqfpQVBemrL2gHA7zYz-S8wp5wQ-ok8/rs:fit:1373:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQv/OGU3NjZjYWUtOGY4/Ni00YzYwLTkwZDgt/OTE0YTVkZmYxYTM0/LnBuZw.png" alt="img" />
                </div>
                <img src="https://ouch-cdn2.icons8.com/GOFfXgpXEnGfVg2i5C-Qc7Ljgdvz1FH7jGjdN5FTgco/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTkx/LzZhMDE3YjA3LTc4/ZDgtNDkwZi1hY2Vk/LWE4N2U5NWQ4YmRj/Zi5zdmc.png" alt="img" />
            </div>
        </div>
    )
}


const Subdetail = ({ title, desc, img }) => {
    return (
        <div className="_innerGrid">
            <div className="__">
                <div className="img">
                    <img src={img} alt="img" />
                </div>
                <div className="gridContent">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}