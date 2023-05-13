import { useEffect, useState } from "react";

export const useMobileDevice = () => {

    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    return windowSize >= 992 ? false : true

}