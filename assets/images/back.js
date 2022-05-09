import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Back({ size, color }) {

    return (
        <Svg width={(size || 17) / scale} height={(size || 17) / scale} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M16.4444 7.44446H4.27444L9.86444 1.85446L8.44444 0.444458L0.444443 8.44446L8.44444 16.4445L9.85444 15.0345L4.27444 9.44446H16.4444V7.44446Z" fill={color || "white"} />
        </Svg>
    )
};