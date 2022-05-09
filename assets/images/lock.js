import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Lock({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.46939 11C7.95436 11 7.53765 11 7.2551 11C5.45102 11 5 12.4444 5 13.1667C5 15.3333 5 20.1 5 21.8333C5 23.5667 6.5034 24 7.2551 24C10.6667 24 17.9408 24 19.7449 24C21.549 24 22 22.5556 22 21.8333V13.1667C22 11.4333 20.4966 11 19.7449 11C19.3804 11 18.9719 11 18.5306 11M8.46939 11V7.83333C8.46939 6.16667 9.61429 3 13.5 3C17.3857 3 18.5306 6.16667 18.5306 7.83333V11M8.46939 11C10.8916 11 15.4884 11 18.5306 11M13.5 16.6667C13.2109 16.6667 12.6327 16.8333 12.6327 17.5C12.6327 18.1667 13.2109 18.3333 13.5 18.3333C13.7891 18.3333 14.3673 18.1667 14.3673 17.5C14.3673 16.8333 13.7891 16.6667 13.5 16.6667Z" stroke={color || "#868686"} strokeWidth={"1.5"} />
        </Svg>
    )
};