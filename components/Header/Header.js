import { useState, useEffect, useCallback } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from './MobileNavbar'
import Link from 'next/link';

const mediaQuery = (width) => {
    
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
        }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', e => updateTarget(e));

        if (media.matches) {
            setTargetReached(true);
    }

    return () => media.removeEventListener('change', e => updateTarget(e));
    }, []);

    return targetReached;
}

const Header = () => {
    let isBreakingPoint = mediaQuery(785);

        return (
            <div className='bg-gray-900 h-16 flex flex-row z-10 fixed w-screen'>
                <div className='flex items-center pl-3'>
                    <h3 className='text-yellow-400 font-logo text-4xl hover:text-gray-50'>
                        <Link href='/'>
                            <a>SeeTheWorld</a>
                        </Link>
                    </h3>
                </div>
                { isBreakingPoint ? < MobileNavbar /> : < DesktopNavbar /> }
            </div>
        )
}


export default Header
