import React from 'react'
import ThemeProvider from './components/ThemeProvider';
import './global.less'

export function rootContainer(container) {
  return React.createElement(ThemeProvider, null, container);
}