import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MinusIcon = ({ size = 90, bgColor = 'black', minusColor = 'white', ...props }) => (
  <Svg width={size} height={size} className="ionicon" viewBox="0 0 512 512" {...props}>
    {/* Background Circle */}
    <Path fill={bgColor} d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48z" />

    {/* Minus Sign */}
    <Path fill={minusColor} d="M176 240h160a16 16 0 0 1 0 32H176a16 16 0 0 1 0-32z" />
  </Svg>
);

export default MinusIcon;



