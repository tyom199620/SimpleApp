import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Russia({ size }) {

    return (
        <Svg width={size || 40 / scale} height={size || 40 / scale} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#F0F0F0" />
            <Path d="M38.756 26.9565C39.56 24.7898 40 22.4464 40 20C40 17.5536 39.56 15.2102 38.756 13.0435H1.24398C0.440078 15.2102 0 17.5536 0 20C0 22.4464 0.440078 24.7898 1.24398 26.9565L20 28.6956L38.756 26.9565Z" fill="#0052B4" />
            <Path d="M20 40C28.5993 40 35.9301 34.5725 38.756 26.9565H1.24396C4.06982 34.5725 11.4007 40 20 40Z" fill="#D80027" />
        </Svg>
    )
};