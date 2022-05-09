import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    DrawerItem
} from '@react-navigation/drawer';
// import { useTranslation } from 'react-i18next';

import LogoHorizontal from '../assets/images/logoHorizontal';
import AddUser from '../assets/images/addUser';
import { AuthContext } from '../context';
import Colors from '../constants/Colors';
import User from '../assets/images/user';
import Exit from '../assets/images/Exit';
import FaQ from '../assets/images/FaQ';
import scale from '../helpers/Theme';

export function DrawerContent(props) {
    // const [t] = useTranslation();
    const { state: { user }, dispatch } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <LogoHorizontal />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.phone}>{user.email || '+49 172 641-80-33'}</Text>
            </View>
            <View style={styles.items}>
                <DrawerItem
                    label={'My Profile'}
                    icon={({ color, size }) => (
                        <User size={size} color={Colors.drawer.icon} />
                    )}
                    labelStyle={styles.labelStyle}
                    onPress={() => {
                        // props.navigation.closeDrawer();
                        props.navigation.navigate('Profile');
                    }}
                />
                <DrawerItem
                    label={'Invite Friends'}
                    icon={({ color, size }) => (
                        <AddUser size={size} color={Colors.drawer.icon} />
                    )}
                    labelStyle={styles.labelStyle}
                    onPress={() => { props.navigation.navigate('Main') }}
                />
                <DrawerItem
                    label={'Exit'}
                    icon={({ color, size }) => (
                        <Exit size={size} color={Colors.drawer.icon} />
                    )}
                    labelStyle={styles.labelStyle}
                    onPress={() => { dispatch({ type: 'SIGN_OUT' }); }}
                />
                <DrawerItem
                    label={'Help'}
                    icon={({ color, size }) => (
                        <FaQ size={size} color={Colors.drawer.icon} />
                    )}
                    labelStyle={styles.labelStyle}
                    onPress={() => { props.navigation.navigate('Main') }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50 / scale,
        paddingBottom: 8 / scale,
        paddingHorizontal: 17 / scale,
        backgroundColor: Colors.button.background
    },
    name: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        marginTop: 16 / scale,
        lineHeight: 18 / scale,
        marginBottom: 4 / scale,
        color: Colors.dark.text
    },
    phone: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12 / scale,
        lineHeight: 14 / scale,
        color: Colors.dark.text
    },
    items: {
        paddingLeft: 20 / scale
    },
    labelStyle: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        color: Colors.drawer.text
    }
});
