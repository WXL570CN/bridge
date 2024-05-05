import { UserOutlined } from '@ant-design/icons';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';
import { Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import { useAccount } from 'wagmi';
import routes from '../../../config/routes';
import styles from './index.less';

const PageContainer = (props) => {
  const { children } = props;
  const [active, setActive] = useState();
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

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
            {address ? (
              <ConnectButton />
            ) : (
              <div className={styles['text']} onClick={openConnectModal}>
                Connect Wallet
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles['page-container']}>{children}</div>
    </div>
  );
};

export default PageContainer;
