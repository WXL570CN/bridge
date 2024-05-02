import styles from './index.less';

const ThemeProvider = (props) => {
  const { children } = props;
  return (
    <div id={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['main-header']}>Header</div>
        <div className={styles['sub-header']}>Sub Header</div>
      </div>
      <div className={styles['page-container']}>{children}</div>
    </div>
  );
};

export default ThemeProvider;
