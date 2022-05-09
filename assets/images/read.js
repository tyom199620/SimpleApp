import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Read({ size, color }) {

    return (
        <Svg width={(size || 17) / scale} height={(size || 17) / scale} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.51174 8.68427C1.20893 8.40164 0.734334 8.41801 0.451709 8.72082C0.169083 9.02363 0.185448 9.49822 0.488261 9.78085L1.51174 8.68427ZM3.7907 11.8372L3.27896 12.3855C3.56711 12.6544 4.01428 12.6544 4.30244 12.3855L3.7907 11.8372ZM11.628 5.54829C11.9308 5.26567 11.9472 4.79107 11.6646 4.48826C11.3819 4.18545 10.9074 4.16908 10.6045 4.45171L11.628 5.54829ZM8.67442 12L8.16268 12.5483C8.45083 12.8172 8.898 12.8172 9.18616 12.5483L8.67442 12ZM16.5117 5.71108C16.8146 5.42846 16.8309 4.95386 16.5483 4.65105C16.2657 4.34824 15.7911 4.33187 15.4883 4.6145L16.5117 5.71108ZM8.31406 10.6378C8.01125 10.3551 7.53666 10.3715 7.25403 10.6743C6.97141 10.9771 6.98777 11.4517 7.29059 11.7343L8.31406 10.6378ZM0.488261 9.78085L3.27896 12.3855L4.30244 11.2889L1.51174 8.68427L0.488261 9.78085ZM4.30244 12.3855L11.628 5.54829L10.6045 4.45171L3.27896 11.2889L4.30244 12.3855ZM9.18616 12.5483L16.5117 5.71108L15.4883 4.6145L8.16268 11.4517L9.18616 12.5483ZM9.18616 11.4517L8.31406 10.6378L7.29059 11.7343L8.16268 12.5483L9.18616 11.4517Z" fill={color || "#868686"} />
        </Svg>
    )
};