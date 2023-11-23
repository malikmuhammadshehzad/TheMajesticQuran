import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DetailsIcon = ({width = 24, height = 25, ...props}) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 13.105v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h6M15 3.105h6v6M10 14.105l11-11"
    />
  </Svg>
);
export default DetailsIcon;

