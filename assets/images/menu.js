import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Menu({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 7H23V9.33333H3V7ZM3 12.8333H23V15.1667H3V12.8333ZM3 18.6667H23V21H3V18.6667Z" fill={color || "#868686"} />
        </Svg>
    )
};