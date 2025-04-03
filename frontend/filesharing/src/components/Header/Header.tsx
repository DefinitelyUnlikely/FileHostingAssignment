import './Header.css'
import { Hamburger } from './Hamburger/Hamburger'


export function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="left-nav">

                </div>
                <div className="middle-nav">
                    <h1 className="branding brandname"> Sunrise Drive</h1>
                </div>
                <div className="right-nav">
                    <Hamburger />
                </div>
            </nav>
        </header>

    )
}