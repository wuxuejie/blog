import _ from 'lodash';
import React from "react";

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {
    // 顺带监听下高度，备用
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const [scrollTop, setScrollTop] = React.useState(document.body.scrollTop || 0);

    const handleWindowResize = () => {
        console.log('handleWindowResize');
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setScrollTop(document.documentElement.scrollTop || document.body.scrollTop);
    }

    React.useEffect(() => {
        const sc = _.throttle(handleWindowResize, 300);
        window.addEventListener('scroll', sc);
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("scroll", sc);
            window.removeEventListener("resize", sc);
        }
    }, []);

    return (
        <viewportContext.Provider value={{ width, height, scrollTop }}>
            {children}
        </viewportContext.Provider>
    );
};

export const useViewport = () => {
    const { width, height, scrollTop } = React.useContext(viewportContext);
    return { width, height, scrollTop };
}