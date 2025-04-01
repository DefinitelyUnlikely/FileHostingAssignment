import './Header.css'
import { Hamburger } from './Hamburger/Hamburger'


export function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="left-nav">

                </div>
                <div className="middle-nav">
                    <h4 className="branding brandname"> mDrive</h4>
                </div>
                <div className="right-nav">
                    <Hamburger />
                </div>
            </nav>
        </header>

    )
}