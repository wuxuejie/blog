import classNames from 'classnames';
import * as React from "react";
import ScrollTrigger from 'react-scroll-trigger';


const App = ({ className, onExit, onEnter, children }) => {
    let show = false;
    const onExitViewport = () => {
        show = false;
        onExit && onExit();
    }
    const onShow = (progress) => {
        if (!show && progress > 0.15) {
            show = true;
            onEnter && onEnter();
        }
    }
    return (
        <ScrollTrigger
            // onEnter={onEnterViewport}
            onExit={onExitViewport}
            className={classNames(className)}
            onProgress={data => {
                onShow(data.progress);
            }}
        >
            {children}
        </ScrollTrigger>
    )
}

export default App
