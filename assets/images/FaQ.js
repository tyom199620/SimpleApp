import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function FaQ({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10.3333 11C10.3333 10.2778 10.9 8.83333 13.1667 8.83333C15.4333 8.83333 16 10.6111 16 11.3333C16 13.1667 13.8333 14.5 13.5 14.8333C13.1667 15.1667 13.1667 15.5 13.1667 15.6667V16.6667M13.1667 20V18.3333M23 14C23 19.5228 18.5228 24 13 24C7.47715 24 3 19.5228 3 14C3 8.47715 7.47715 4 13 4C18.5228 4 23 8.47715 23 14Z" stroke={color || "#868686"} strokeWidth="1.5" />
        </Svg>
    )
};