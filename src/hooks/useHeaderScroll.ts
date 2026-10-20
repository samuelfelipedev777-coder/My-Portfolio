import { useEffect, useRef, useState } from "react";

export default function useHeaderScroll() {
    const previousScroll = useRef<number>(0);
    const active: boolean = true;
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > previousScroll.current) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            previousScroll.current = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return {
        isScrollingDown,
        previousScroll,
        active
    };
}