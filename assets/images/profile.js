import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Profile({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.47882 22.1032C9.18356 23.2985 11.2599 24 13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3C7.70101 3 3 7.70101 3 13.5C3 17.0588 4.77054 20.2042 7.47882 22.1032ZM7.47882 22.1032C7.47882 18.7955 10.2306 17.9731 11.6066 17.9754H15.3934C16.7694 17.9731 19.5212 18.7955 19.5212 22.1032M16.7705 11.4344C16.7705 13.2407 15.3062 14.7049 13.5 14.7049C11.6938 14.7049 10.2295 13.2407 10.2295 11.4344C10.2295 9.62818 11.6938 8.16393 13.5 8.16393C15.3062 8.16393 16.7705 9.62818 16.7705 11.4344Z" stroke={color || "#868686"} strokeWidth="1.5" />
        </Svg>
    )
};