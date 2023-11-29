import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PlusIcon = ({size = 30, bgColor = 'black', plusColor='white' ,  ...props}) => (
  <Svg
    width={size}
    height={size}
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}>
    <Path
     fill={bgColor}
      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32z"
    />
    <Path fill={plusColor} d="M336 240H272v-64a16 16 0 0 0-32 0v64H176a16 16 0 0 0 0 32h64v64a16 16 0 0 0 32 0v-64h64a16 16 0 0 0 0-32z" />
  </Svg>
);
export default PlusIcon;
