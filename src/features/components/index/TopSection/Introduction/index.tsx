import styles from './styles.module.css';
import React from 'react';
import useObserver from '../../../../../hooks/useObserver.ts';

export default function Introduction() {
  const ref = React.useRef<HTMLDivElement>(null);

  useObserver(
    () => {
      ref.current?.classList.add(styles.active);
    },
    ref,
    { threshold: 1.0 },
  );

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.flexWrapper}>
        <img className={styles.icon} src="/icon.svg" alt="自分のアイコン" />
        <div className={styles.divider}></div>
        <div className={styles.description}>
          <h3>ちゅるり</h3>
          <p className={styles.affiliation}>筑波大学 情報理工学位プログラム M1</p>
          <p>たべること・寝ることがすき</p>
        </div>
      </div>
      {/*<div className={styles.others}>*/}
      {/*  <div className={styles.row}>*/}
      {/*    <p className={styles.rowTitle}>TA</p>*/}
      {/*    <p className={styles.rowContent}>*/}
      {/*      <span className={`${styles.label} ${styles.labelCOJT}`}>COJT SW</span>*/}
      {/*      <span className={`${styles.label} ${styles.labelPRO}`}>プログラミング</span>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className={styles.row}>*/}
      {/*    <p className={styles.rowTitle}>Working At</p>*/}
      {/*    <p className={styles.rowContent}>*/}
      {/*      <span>株式会社スプーキーズ</span>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
