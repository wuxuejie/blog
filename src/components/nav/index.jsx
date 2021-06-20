import { LocalizedLink } from "gatsby-theme-i18n";
import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from '../../assets/icon/logo.png';
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
      <div className={styles.flex} style={{ backgroundColor: `rgba(0, 0, 0, ${arf})` }}>
        <div className={styles.nav}>
          <div className={styles.left}>
            <a href="#home">
              <img className={styles.logo} src={logo} />
            </a>
          </div>
          <div className={styles.right} style={{ justifyContent: 'end' }}>
            <a href="#banner">{I('nav.home')}</a>
            <a href="#team">{I('nav.team')}</a>
            <a href="#project">{I('nav.project')}</a>
            <a href="#news">{I('nav.news')}</a>
            <a href="#contact">{I('nav.contact')}</a>
            <a className={styles.lang}>{I('nav.lange')}
              <ul>
                <li className={styles.jiantou}></li>
                <li style={{ paddingTop: '0px', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>

                  <LocalizedLink to="/" language="zh-cn">
                    <div className={styles.langLink}>
                      {I('nav.lange') == I('secondPageGermanLink') ?
                        <div className={styles.jiantou2}></div> : <span style={{ width: '16px' }}></span>}
                      {I('secondPageGermanLink')}
                    </div>
                  </LocalizedLink>
                </li>
                <li style={{ paddingBottom: '15px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}>
                  <LocalizedLink to="/" language="en">
                    <div className={styles.langLink}>
                      {I('nav.lange') == I('indexPageEnglishLink') ?
                        <div className={styles.jiantou2}></div> : <span style={{ width: '16px' }}></span>}
                      {I('indexPageEnglishLink')}
                    </div>
                  </LocalizedLink>
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
