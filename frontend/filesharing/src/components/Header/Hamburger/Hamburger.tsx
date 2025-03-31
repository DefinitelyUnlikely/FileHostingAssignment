import './Hamburger.css'
import { useState } from 'react';

export function Hamburger() {
    const [isActive, SetIsActive] = useState(false);

    const handleOnClick = () => {
        SetIsActive(!isActive);
    }

    return (
        <div className={`ham-menu ${isActive ? "active" : ""}`} onClick={handleOnClick}>
            <span></span>
            <span></span>
            <span></span>
        </div >
    )
}