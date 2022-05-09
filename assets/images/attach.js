import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Attach({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.2782 11.8065L12.9998 4.98249C19.0116 -1.02903 28.0292 7.98825 22.0174 13.9998L13.3335 22.6783C9.32562 26.686 3.31388 20.6745 7.32171 16.6668L16.0057 7.98825C17.9947 6.04839 20.9973 9.09678 19.3452 10.994L11.0383 19.4274" stroke={color || "#868686"} strokeWidth="1.5" strokeLinecap="round" />
        </Svg>
    )
};