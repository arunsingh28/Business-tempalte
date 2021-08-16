import React from 'react'
import '../style/Footer.scss'
export const Footer = () => {
    return (
        <footer>
            <h1 className="t">Let's make something <br />great together</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="subscribe">
                <input type="text" placeholder="@awsome.com" />
                <button>Send</button>
            </div>
            <div className="gridlayout">
                <div className="company">
                    <h1 className="name">Elliott</h1>
                    <p className="slog">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat optio numquam quae molestiae et corrupti commodi, illum alias dignissimos, neque, aperiam mollitia odio voluptate ipsa iusto eius facilis amet.</p>
                </div>
                <div>
                    <h4>Product</h4>
                    <ul>
                        <li>Domain</li>
                        <li>pricing</li>
                    </ul>
                </div>
                <div>
                    <h4>Service</h4>
                    <ul>
                        <li>SEO</li>
                        <li>Customer care</li>
                        <li>Design</li>

                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>google</li>
                        <li>microsoft</li>
                        <li>spacex</li>
                        <li>amazon</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
