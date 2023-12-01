import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = ({size = 25, ...props}) => (
  <Svg
    width={size}
    height={size}
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}>
    <Path d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64zm-48 0H192v-80a64 64 0 1 1 128 0z" />
  </Svg>
);
export default SvgComponent;
