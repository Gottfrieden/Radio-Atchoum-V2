import React, { useState } from 'react';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={() => setIsOpen()} className='burger-menu open'>
            <span className='line'/>
            <span className='line'/>
            <span className='line'/>
        </div>
    )
}