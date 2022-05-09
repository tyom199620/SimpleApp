import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function BlockUser({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3.25 20.486C3.25 20.9002 3.58579 21.236 4 21.236C4.41421 21.236 4.75 20.9002 4.75 20.486H3.25ZM11.5963 16.5257C12.0105 16.5257 12.3463 16.1899 12.3463 15.7757C12.3463 15.3615 12.0105 15.0257 11.5963 15.0257V16.5257ZM11.5963 4.75C13.3159 4.75 14.8096 6.25153 14.8096 8.03738H16.3096C16.3096 5.44941 14.1704 3.25 11.5963 3.25V4.75ZM11.5963 3.25C9.02229 3.25 6.88303 5.44941 6.88303 8.03738H8.38303C8.38303 6.25153 9.87679 4.75 11.5963 4.75V3.25ZM11.5963 11.3248C9.87679 11.3248 8.38303 9.82324 8.38303 8.03738H6.88303C6.88303 10.6254 9.02229 12.8248 11.5963 12.8248V11.3248ZM11.5963 12.8248C14.1704 12.8248 16.3096 10.6254 16.3096 8.03738H14.8096C14.8096 9.82324 13.3159 11.3248 11.5963 11.3248V12.8248ZM17.8716 14.3388C19.7562 14.3388 21.25 15.8403 21.25 17.7944H22.75C22.75 15.0382 20.6107 12.8388 17.8716 12.8388V14.3388ZM17.8716 21.25C15.9869 21.25 14.4931 19.7485 14.4931 17.7944H12.9931C12.9931 20.5506 15.1324 22.75 17.8716 22.75V21.25ZM17.8716 12.8388C16.5099 12.8388 15.2862 13.3855 14.4051 14.283L15.4756 15.3338C16.0808 14.7173 16.9213 14.3388 17.8716 14.3388V12.8388ZM14.4051 14.283C13.5245 15.1801 12.9931 16.4201 12.9931 17.7944H14.4931C14.4931 16.8135 14.87 15.9507 15.4756 15.3338L14.4051 14.283ZM21.25 17.7944C21.25 18.7753 20.8731 19.6381 20.2675 20.255L21.338 21.3058C22.2186 20.4087 22.75 19.1687 22.75 17.7944H21.25ZM20.2675 20.255C19.6623 20.8715 18.8218 21.25 17.8716 21.25V22.75C19.2332 22.75 20.4569 22.2033 21.338 21.3058L20.2675 20.255ZM14.4051 15.3338L20.2675 21.3058L21.338 20.255L15.4756 14.283L14.4051 15.3338ZM8.62385 16.5257H11.5963V15.0257H8.62385V16.5257ZM4.75 20.486C4.75 19.8182 4.95273 18.8019 5.53723 17.9749C6.09423 17.1869 7.02466 16.5257 8.62385 16.5257V15.0257C6.52397 15.0257 5.14247 15.9346 4.31231 17.1092C3.50966 18.2448 3.25 19.5837 3.25 20.486H4.75Z" fill={color || "#868686"} />
        </Svg>
    )
};