import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useViewport } from '../useViewport';
import * as styles from './index.module.less';

const Index = ({ data }) => {
  const { scrollTop } = useViewport();
  return (
    <>
      <div id="contact" className={styles.container}>
        FOLLOW US
      </div>
    </>
  )
}

export default Index
