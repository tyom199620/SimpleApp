import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Dots({ height, width, color }) {

    return (
        <Svg width={(width || 5) / scale} height={(height || 17) / scale} viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.33333 2.33332C4.33333 3.31516 3.53739 4.1111 2.55555 4.1111C1.57371 4.1111 0.777771 3.31516 0.777771 2.33332C0.777771 1.35148 1.57371 0.555542 2.55555 0.555542C3.53739 0.555542 4.33333 1.35148 4.33333 2.33332Z" fill={color || "white"} />
            <Path d="M4.33333 8.55554C4.33333 9.53738 3.53739 10.3333 2.55555 10.3333C1.57371 10.3333 0.777771 9.53738 0.777771 8.55554C0.777771 7.5737 1.57371 6.77776 2.55555 6.77776C3.53739 6.77776 4.33333 7.5737 4.33333 8.55554Z" fill={color || "white"} />
            <Path d="M4.33333 14.7778C4.33333 15.7596 3.53739 16.5555 2.55555 16.5555C1.57371 16.5555 0.777771 15.7596 0.777771 14.7778C0.777771 13.7959 1.57371 13 2.55555 13C3.53739 13 4.33333 13.7959 4.33333 14.7778Z" fill={color || "white"} />
        </Svg>
    )
};