import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SearchIcon = ({ iconSize = 24, containerSize = 22,   ...props}) => (
  <Svg width={containerSize} height={containerSize} fill="none" {...props}>
    <G
      stroke="#122704"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      transform={`scale(${iconSize / 21})`}
      >

      <Path d="M7.982 14.413c3.724 0 6.742-2.844 6.742-6.353s-3.018-6.353-6.742-6.353S1.239 4.551 1.239 8.06s3.019 6.353 6.743 6.353ZM16.522 14.407l-1.798-1.694" />
    </G>
  </Svg>
);

export default SearchIcon;
