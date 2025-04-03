import './Hamburger.css'
import { useState } from 'react';

export function Hamburger({ extraBarVisible, setExtraBarVisible }: { extraBarVisible: Boolean, setExtraBarVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [isActive, setIsActive] = useState(false);

    const handleOnClick = () => {
        setIsActive(!isActive);
        setExtraBarVisible(!extraBarVisible)
    }

    return (
        <div className={`ham-menu ${isActive ? "active" : ""}`} onClick={handleOnClick}>
            <span></span>
            <span></span>
            <span></span>
        </div >
    )
}