import { Avatar, Popover } from 'antd';
import styles from './index.less';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import routes from '../../../config/routes';
import { history } from 'umi';

const ThemeProvider = (props) => {
  const { children } = props;
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(history.location.pathname);
  }, []);

  const onRouteClick = (route) => {
    setActive(route.path);
    history.push(route.path);
  };

  return (
    <div id={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['main-header']}>
          <a className={styles['logo']}>
            <Avatar size={32} icon={<UserOutlined />} />
            <span className={styles['name']}>Jupiter</span>
          </a>
          <div className={styles['tabs']}>
            {routes.map((item) => (
              <a
                key={item.path}
                className={`${active == item.path && styles['active']}`}
                onClick={() => {
                  onRouteClick(item);
                }}
              >
                <div>
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
          </div>
          <div className={styles['extra']}>
            <div className={styles['user']}>Connect Wallet</div>
          </div>
        </div>
      </div>
      <div className={styles['page-container']}>{children}</div>
    </div>
  );
};

export default ThemeProvider;
