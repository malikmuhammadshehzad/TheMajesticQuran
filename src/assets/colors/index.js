import LightColor from './LightColor';

import DarkColor from './DarkColor';

const COLORS = () => {
  currentColor = 'light';
  return currentColor === 'dark' ? DarkColor : LightColor;
};

export default COLORS();
