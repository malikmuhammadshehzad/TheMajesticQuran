import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownloadIcon = ({size = 25, color, ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      stroke={color}
      d="M18.313 13.625h-4.031V7.031A1.04 1.04 0 0 0 13.251 6H9.22c-.594 0-1.063.469-1.063 1.031v6.594H4.126c-.531 0-.719.344-.313.75l6.688 6.656c.188.188.438.281.719.281s.563-.094.75-.281l6.656-6.656c.375-.406.25-.75-.313-.75zM0 18.344v7.125c0 .313.156.5.5.5h21.375c.344 0 .531-.188.531-.5v-7.125a.526.526 0 0 0-.531-.531h-2.031a.548.548 0 0 0-.531.531v4.531H3.063v-4.531c0-.313-.219-.531-.5-.531H.5c-.281 0-.5.25-.5.531z"
    />
  </Svg>
);
export default DownloadIcon;
