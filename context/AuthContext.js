import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import APICalls from '../api/APICalls';

const AuthContext = React.createContext({});
const AuthContextProvider = (props) => {
    const navigation = useNavigation();
    const [state, dispatch] = React.useReducer((prevState, action) => {
        switch (action.type) {
            case 'SIGN_IN':
                APICalls.authToken = action.userToken;
                return {
                    ...prevState,
                    isSignout: false,
                    user: action.user,
                    userToken: action.userToken
                }
            case 'SIGN_OUT':
                AsyncStorage.removeItem('user');
                return {
                    ...prevState,
                    userToken: null,
                    isSignout: true
                }
            default:
                break;
        }

    }, {
        user: {},
        isLoading: true,
        userToken: null,
        isSignout: false
    });

    React.useEffect(() => {
        AsyncStorage.getItem('user').then(data => {
            if (data) {
                const { user, token: userToken } = JSON.parse(data);
                dispatch({ type: 'SIGN_IN', userToken, user });
            }
        });
    }, [])

    const login = ({ email, password }, cb) => {
        APICalls.login(email, password).then(res => {
            if (res?.data?.token) {
                const { token: userToken, user } = res.data;
                AsyncStorage.setItem('user', JSON.stringify(res.data));
                return dispatch({ type: 'SIGN_IN', userToken, user });
            }
            cb && cb();
        }, err => {
            cb && cb();
        });
    };

    const register = ({ name, email, password, password_confirmation, policy = true }, cb) => {
        APICalls.register(name, email, password, password_confirmation, policy).then(res => {
            if (res.data.success) {
                return navigation.navigate('Auth', { screen: 'SignIn' });
            }
            cb && cb();
        }, err => {
            cb && cb();
        })
    };

    const reset = (email, cb) => {
        APICalls.reset(email).then(res => {
            if (res.data.success) {
                return navigation.navigate('Auth', { screen: 'SignIn' });
            }
            cb && cb();
        }, err => {
            cb && cb();
        });
    };

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                reset,
                register,
                dispatch
            }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthContextProvider };