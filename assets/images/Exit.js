import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function Exit({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M14.4534 9.82609C14.4534 10.2403 14.7892 10.5761 15.2034 10.5761C15.6176 10.5761 15.9534 10.2403 15.9534 9.82609H14.4534ZM15.9534 17.8261C15.9534 17.4119 15.6176 17.0761 15.2034 17.0761C14.7892 17.0761 14.4534 17.4119 14.4534 17.8261H15.9534ZM9.1017 13.25C8.68748 13.25 8.3517 13.5858 8.3517 14C8.3517 14.4142 8.68748 14.75 9.1017 14.75V13.25ZM23 14L23.5371 14.5235C23.821 14.2322 23.821 13.7678 23.5371 13.4765L23 14ZM19.6388 9.47654C19.3497 9.1799 18.8749 9.17379 18.5782 9.46289C18.2816 9.75198 18.2755 10.2268 18.5646 10.5235L19.6388 9.47654ZM18.5646 17.4765C18.2755 17.7732 18.2816 18.248 18.5782 18.5371C18.8749 18.8262 19.3497 18.8201 19.6388 18.5235L18.5646 17.4765ZM15.9534 9.82609V7.91304H14.4534V9.82609H15.9534ZM15.9534 7.91304C15.9534 7.41255 15.7792 6.77271 15.3774 6.2426C14.9541 5.68417 14.2756 5.25 13.339 5.25V6.75C13.7583 6.75 14.012 6.92453 14.182 7.14871C14.3734 7.4012 14.4534 7.71788 14.4534 7.91304H15.9534ZM3.75 7.91304C3.75 7.71788 3.83003 7.4012 4.02142 7.14871C4.19135 6.92453 4.44509 6.75 4.86441 6.75V5.25C3.92779 5.25 3.24933 5.68417 2.82603 6.2426C2.4242 6.77271 2.25 7.41255 2.25 7.91304H3.75ZM4.86441 6.75H13.339V5.25H4.86441V6.75ZM14.4534 17.8261V20.087H15.9534V17.8261H14.4534ZM14.4534 20.087C14.4534 20.2821 14.3734 20.5988 14.182 20.8513C14.012 21.0755 13.7583 21.25 13.339 21.25V22.75C14.2756 22.75 14.9541 22.3158 15.3774 21.7574C15.7792 21.2273 15.9534 20.5874 15.9534 20.087H14.4534ZM2.25 20.087C2.25 20.5874 2.4242 21.2273 2.82603 21.7574C3.24933 22.3158 3.92779 22.75 4.86441 22.75V21.25C4.44509 21.25 4.19135 21.0755 4.02142 20.8513C3.83003 20.5988 3.75 20.2821 3.75 20.087H2.25ZM4.86441 22.75H13.339V21.25H4.86441V22.75ZM3.75 20.087V7.91304H2.25V20.087H3.75ZM9.1017 14.75H23V13.25H9.1017V14.75ZM23.5371 13.4765L19.6388 9.47654L18.5646 10.5235L22.4629 14.5235L23.5371 13.4765ZM22.4629 13.4765L18.5646 17.4765L19.6388 18.5235L23.5371 14.5235L22.4629 13.4765Z" fill={color || "#868686"} />
        </Svg>
    )
};