import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { I } from "../../utils";
import { useViewport } from '../useViewport';
import * as styles from './index.module.less';

const Index = ({ data }) => {
    const { scrollTop } = useViewport();
    let arf = scrollTop / 1200 + 0.3;
    arf = arf > 0.8 ? 0.8 : arf || 0.3;
    return (
        <>
            <div className={styles.header}></div>
            <div className={styles.flex} style={{ opacity: arf }}>
                <div className={styles.nav}>
                    <div className={styles.left}>
                        <img className={styles.logo} src="./assets/der.png" />
                        <a href="#dert">
                            DERT
            </a>
                    </div>
                    <div className={styles.right} style={{ justifyContent: 'end' }}>
                        <a href="#jrsc">{I('nav.home')}</a>
                        <a href="#xmcs">{I('nav.project')}</a>
                        <a href="#jsys">{I('nav.team')}</a>
                        <a href="#jsjg">{I('nav.news')}</a>
                        <a href="#team">{I('nav.contact')}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
