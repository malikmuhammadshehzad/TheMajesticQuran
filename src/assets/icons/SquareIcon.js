import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { COLORS } from '..';
const  SquareIcon = ({size = 25, color, ...props}) => (
  <Svg
    width={size}
    height={size}
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}>
    <Path   stroke={color} d="M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48z" />
  </Svg>
);
export default SquareIcon;
