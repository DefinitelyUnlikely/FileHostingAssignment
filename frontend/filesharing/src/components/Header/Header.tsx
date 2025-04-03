import './Header.css'
import { useState } from 'react';
import { Hamburger } from './Hamburger/Hamburger'


export function Header() {
    const [extraBarVisible, setExtraBarVisible] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="left-nav">

                </div>
                <div className="middle-nav">
                    <h1 className="branding brandname"> Sunrise Drive</h1>
                </div>
                <div className="right-nav">
                    <Hamburger extraBarVisible={extraBarVisible} setExtraBarVisible={setExtraBarVisible} />
                </div>
            </nav>
            <div className={`extra-bar ${extraBarVisible ? "visible" : ""}`}>
                Hello
            </div>
        </header>

    )
}