import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

import CustomButton from '../components/Button';
import Profile from '../assets/images/profile';
import CustomInput from '../components/Input';
import Language from '../components/Language';
import { AuthContext } from '../context';
import Lock from '../assets/images/lock';
import Logo from '../assets/images/Logo';
import Colors from '../constants/Colors';
import Mask from '../assets/images/mask';
import At from '../assets/images/at';
import scale from '../helpers/Theme';

export default function SignUpScreen({ navigation }) {
    const { register } = React.useContext(AuthContext);
    const [credentials, setCredentails] = React.useState({
        name: '',
        email: '',
        password: '',
        policy: true,
        disabled: false,
        password_confirmation: ''
    });

    const cb = () => {
        setCredentails(prev => {
            prev.disabled = !prev.disabled;
            return prev;
        });
    };

    const regUser = () => {
        if (credentials.name.length && credentials.email.length && credentials.password.length && credentials.password_confirmation.length) {
            cb();
            register(credentials, cb);
        }
    };

    return (
        <ScrollView
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 / scale }}>
            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <Mask width={'100%'} color={Colors.drawer.icon} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 50 / scale }}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        <View style={styles.logo}>
                            <Logo />
                        </View>
                        <Text style={styles.title}>Sign Up</Text>
                        <CustomInput
                            Icon={At}
                            size={20}
                            name={'name'}
                            onChange={(name, text) => {
                                setCredentails(prev => {
                                    prev[name] = text;
                                    return prev;
                                });
                            }}
                            placeholder={'Nick Name'}
                        />
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
                            containerStyle={styles.mt20}
                        />
                        <CustomInput
                            size={20}
                            secure={true}
                            Icon={Profile}
                            name={'password'}
                            onChange={(name, text) => {
                                setCredentails(prev => {
                                    prev[name] = text;
                                    return prev;
                                });
                            }}
                            placeholder={'Password'}
                            containerStyle={styles.mt20}
                        />
                        <CustomInput
                            size={20}
                            Icon={Lock}
                            secure={true}
                            containerStyle={styles.mt20}
                            onChange={(name, text) => {
                                setCredentails(prev => {
                                    prev[name] = text;
                                    return prev;
                                });
                            }}
                            name={'password_confirmation'}
                            placeholder={'Confirm password'}
                        />
                        <CustomButton
                            size={20}
                            label='Sign Up'
                            onPress={regUser}
                            containerStyle={styles.mt30}
                            disabled={credentials.disabled}
                        />
                        <CustomButton
                            size={20}
                            label={'Login'}
                            onPress={() => {
                                navigation.navigate('SignIn')
                            }}
                            containerStyle={styles.singUp}
                        />
                    </View>
                    <Language />
                </SafeAreaView>
            </View>
        </ScrollView >
    )
};

const styles = StyleSheet.create({
    mainContainer: {
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
        marginVertical: 14 / scale,
        backgroundColor: 'transparent'
    },
    mt20: {
        marginTop: 20 / scale
    },
    mt30: {
        marginTop: 30 / scale
    }
});