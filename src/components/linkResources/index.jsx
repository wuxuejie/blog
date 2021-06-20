import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useViewport } from '../useViewport';
import * as styles from './index.module.less';

const Index = ({ data }) => {
  const { scrollTop } = useViewport();
  return (
    <>
      <div className={styles.container}>
        <a href="javascript:void(0)" className={styles.left}>
          白皮书
        </a>
        <a href="javascript:void(0)" className={styles.right}>
          区块链浏览器
        </a>
      </div>
    </>
  )
}

export default Index
