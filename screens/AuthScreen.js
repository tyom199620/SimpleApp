import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

import CustomButton from '../components/Button';
import CustomInput from '../components/Input';
import Language from '../components/Language';
import { AuthContext } from '../context';
import Colors from '../constants/Colors';
import Lock from '../assets/images/lock';
import Logo from '../assets/images/Logo';
import Mask from '../assets/images/mask';
import scale from '../helpers/Theme';
import At from '../assets/images/at';

export default function AuthScreen({ navigation }) {
    const { login } = React.useContext(AuthContext);
    const [credentials, setCredentails] = React.useState({ email: '', password: '', disabled: false });

    const cb = () => {
        setCredentails(prev => {
            prev.disabled = !prev.disabled;
            return prev;
        });
    };

    const logIn = () => {
        if (credentials.email.length && credentials.password.length) {
            cb();
            login(credentials, cb);
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1, paddingBottom: 20 / scale }} style={styles.mainContainer}>
            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <Mask width={'100%'} color={Colors.drawer.icon} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 50 / scale }}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        <View style={styles.logo}>
                            <Logo />
                        </View>
                        <Text style={styles.title}>Login</Text>
                        <CustomInput
                            Icon={At}
                            size={20}
                            name={'email'}
                            placeholder={'E-mail'}
                            onChange={(name, text) => {
                                setCredentails(prev => {
                                    prev[name] = text;
                                    return prev;
                                });
                            }}
                        />
                        <CustomInput
                            size={20}
                            Icon={Lock}
                            secure={true}
                            name={'password'}
                            placeholder={'Password'}
                            onChange={(name, text) => {
                                setCredentails(prev => {
                                    prev[name] = text;
                                    return prev;
                                });
                            }}
                            containerStyle={styles.password}
                        />
                        <CustomButton
                            label='Login'
                            onPress={logIn}
                            disabled={credentials.disabled}
                        />
                        <CustomButton
                            label={'Reset password'}
                            onPress={() => {
                                navigation.navigate('Reset')
                            }}
                            containerStyle={styles.singUp}
                        />
                        <CustomButton
                            label={'Sign Up'}
                            onPress={() => {
                                navigation.navigate('SignUp')
                            }}
                            containerStyle={[styles.singUp, { marginTop: 0 / scale }]}
                        />
                    </View>
                    <Language />
                </SafeAreaView>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.blue
    },
    title: {
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'center',
        fontSize: 24 / scale,
        color: Colors.dark.text,
        marginBottom: 30 / scale
    },
    password: {
        marginTop: 20 / scale,
        marginBottom: 30 / scale
    },
    logo: {
        alignSelf: 'center',
        marginVertical: 28 / scale
    },
    singUp: {
        marginTop: 14 / scale,
        // marginBottom: 150 / scale,
        backgroundColor: 'transparent'
    }
});