import * as React from 'react';
import NavMenu from '../components/nav-menu';
import { View } from '../../lib';

export default ({ children }) => {
  return (
    <View>
      <NavMenu />
      {children}
    </View>
  )
}