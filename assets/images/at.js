import React from 'react';
import { Svg, Path } from 'react-native-svg';

import scale from '../../helpers/Theme';

export default function At({ size, color }) {

    return (
        <Svg width={(size || 27) / scale} height={(size || 27) / scale} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17.3962 22.75C17.8104 22.75 18.1462 22.4142 18.1462 22C18.1462 21.5858 17.8104 21.25 17.3962 21.25V22.75ZM17.1557 13C17.1557 14.7428 15.7428 16.1557 14 16.1557V17.6557C16.5712 17.6557 18.6557 15.5712 18.6557 13H17.1557ZM14 16.1557C12.2572 16.1557 10.8443 14.7428 10.8443 13H9.34434C9.34434 15.5712 11.4288 17.6557 14 17.6557V16.1557ZM10.8443 13C10.8443 11.2572 12.2572 9.84434 14 9.84434V8.34434C11.4288 8.34434 9.34434 10.4288 9.34434 13H10.8443ZM14 9.84434C15.7428 9.84434 17.1557 11.2572 17.1557 13H18.6557C18.6557 10.4288 16.5712 8.34434 14 8.34434V9.84434ZM14 21.25C9.44365 21.25 5.75 17.5563 5.75 13H4.25C4.25 18.3848 8.61522 22.75 14 22.75V21.25ZM5.75 13C5.75 8.44365 9.44365 4.75 14 4.75V3.25C8.61522 3.25 4.25 7.61522 4.25 13H5.75ZM14 4.75C18.5563 4.75 22.25 8.44365 22.25 13H23.75C23.75 7.61522 19.3848 3.25 14 3.25V4.75ZM14 22.75H17.3962V21.25H14V22.75ZM22.25 13C22.25 13.6115 22.1318 14.5169 21.8066 15.2394C21.484 15.9564 21.0511 16.3255 20.4528 16.3255V17.8255C21.8923 17.8255 22.733 16.8361 23.1745 15.8549C23.6135 14.8794 23.75 13.747 23.75 13H22.25ZM20.4528 16.3255C20.0656 16.3255 19.7962 16.236 19.5989 16.11C19.399 15.9823 19.2267 15.7872 19.0832 15.5059C18.7837 14.9185 18.6557 14.0458 18.6557 13H17.1557C17.1557 14.1112 17.2823 15.2762 17.747 16.1873C17.9856 16.6553 18.3227 17.0746 18.7914 17.3741C19.2628 17.6752 19.8212 17.8255 20.4528 17.8255V16.3255Z" fill={color || "#868686"} />
        </Svg>
    )
};