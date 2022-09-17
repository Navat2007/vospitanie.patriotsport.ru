import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({children}) => {
    const location = useLocation();
    useEffect(() => {
        document.getElementById('content').scrollTo(0, 0);
    }, [location]);

    return <section id={"content"} className="content__section">{children}</section>
};

export default ScrollToTop;