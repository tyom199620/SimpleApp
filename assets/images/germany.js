
import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Germany({ size }) {

    return (
        <Svg width={size || 40 / scale} height={size || 40 / scale} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.24396 26.9565C4.06982 34.5724 11.4007 40 20 40C28.5993 40 35.9301 34.5724 38.756 26.9565L20 25.2174L1.24396 26.9565Z" fill="#FFDA44" />
            <Path d="M20 0C11.4007 0 4.06982 5.4275 1.24396 13.0435L20 14.7826L38.756 13.0434C35.9301 5.4275 28.5993 0 20 0Z" fill="black" />
            <Path d="M1.24398 13.0435C0.440078 15.2102 0 17.5536 0 20C0 22.4464 0.440078 24.7898 1.24398 26.9565H38.7561C39.56 24.7898 40 22.4464 40 20C40 17.5536 39.56 15.2102 38.756 13.0435H1.24398Z" fill="#D80027" />
        </Svg>
    )
};