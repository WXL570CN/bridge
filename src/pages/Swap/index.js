import {
  ControlOutlined,
  DollarOutlined,
  DownOutlined,
  ReloadOutlined,
  SettingOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import { useState } from 'react';

const renderInfo = (name, value) => {
  return <div className={`${styles['info-box']} df ai_c jc_sb`}>
    <div className={styles['name']}>{name}</div>
    <div className={styles['value']}>{value}</div>
  </div>
}

export default function Swap() {
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  const onPriceInfoShow = () => {
    setShowPriceInfo(!showPriceInfo);
  };

  return (
    <div className={styles['swap-container']}>
      <div>
        <div className={styles['tool']}>
          <div className={styles['refresh']} onClick={onRefresh}>
            <ReloadOutlined spin={refresh} />
          </div>
          <div className={styles['setting']}>
            <div className={styles['slippage-settings']}>
              <ControlOutlined className={styles['icon']} />
              <div className={styles['auto']}>
                <span>Auto</span>
                <span className={styles['active']}>Beta</span>
              </div>
            </div>
            <div className={styles['general-settings']}>
              <SettingOutlined />
            </div>
          </div>
        </div>
        <div className={styles['form-container']}>
          <div className={styles['form-item']}>
            <div className={styles['name']}>You're paying</div>
            <div className={styles['form-group']}>
              <div className={styles['currency-select']}>
                <div className={styles['currency-icon']}>
                  <DollarOutlined />
                </div>
                <div className={styles['currency']}>SOL</div>
                <div className={styles['unfold-icon']}>
                  <DownOutlined />
                </div>
              </div>
              <div className={styles['value-input']}>
                <input required />
                <label>0.00</label>
              </div>
            </div>
          </div>
          <div className={styles['divider']}>
            <hr />
            <div className={styles['switch']}>
              <SwapOutlined rotate={90} />
            </div>
          </div>
          <div className={styles['form-item']}>
            <div className={styles['name']}>To receive</div>
            <div className={styles['form-group']}>
              <div className={styles['currency-select']}>
                <div className={styles['currency-icon']}>
                  <DollarOutlined />
                </div>
                <div className={styles['currency']}>USDT</div>
                <div className={styles['unfold-icon']}>
                  <DownOutlined />
                </div>
              </div>
              <div className={styles['value-input']}>
                <input required />
                <label>0.00</label>
              </div>
            </div>
          </div>
          <div className={styles['connect-wallet']}>
            <div className={styles['text']}>Connect Wallet</div>
          </div>
        </div>
        <div className={styles['swap-footer']}>
          <div className={styles['info-container']}>
            <div className={styles['header']}>
              <div className={styles['conversion-info']}>
                <div className={styles['info']}>
                  <span>1 SOL ≈ </span>
                  <span>137.80588</span>
                  <span>USDC</span>
                </div>
                <div className={styles['switch']}>
                  <SwapOutlined />
                </div>
              </div>
              <div className={styles['price-info']} onClick={onPriceInfoShow}>
                <div className={styles['unfold']}>
                  <DownOutlined rotate={showPriceInfo ? 180 : 0} />
                </div>
                <span>{`${showPriceInfo ? 'Hidden' : 'Show'} price info`}</span>
              </div>
            </div>
            <div className={`${styles['content']} ${showPriceInfo && styles['content-visible']}`}>
              {renderInfo('Price Impact', '<0.1%')}
              {renderInfo('Minimum Received', '0.007277602 SOL')}
              {renderInfo('Max Transaction Fee [?]', '0.000305 SOL')}
              {renderInfo('Deposit[?]', '0.00203928 SOL for 1 ATA account')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
