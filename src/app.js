import React from 'react';
import './global.less';
import '@rainbow-me/rainbowkit/styles.css';
import RainbowKit from './components/RainbowKit';

export function rootContainer(container) {
  return React.createElement(RainbowKit, null, container);
}
