/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext, AuthContextProvider, UserContextProvider } from '../context';
// import { DrawerContent } from '../components/DrawerContent';
// import LinkingConfiguration from './LinkingConfiguration';
import { DrawerContent } from '../components/DrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TopicsScreen from '../screens/TopicsScreen';
import ResetScreen from '../screens/ResetScreen';
import AuthScreen from '../screens/AuthScreen';
import MainScreen from '../screens/MainScreen';
import TourScreen from '../screens/TourScreen';
import ChatScreen from '../screens/ChatScreen';

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
    // linking={LinkingConfiguration}
    // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <AuthContextProvider>

        <RootNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {

  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Main'} component={MainScreen} />
      <Stack.Screen name={'Tour'} component={TourScreen} />
      <Stack.Screen name={'Topics'} component={TopicsScreen} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
      <Stack.Screen name={'Chat'} component={ChatScreen} />
    </Stack.Navigator>
  );
};

function DrawerNavigator() {

  return (
    <UserContextProvider>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
        }}
        initialRouteName={'Home'}
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name={'Home'}
          component={MainStack}
          options={{
            gestureHandlerProps: {
              enabled: false
            }
          }}
        />
      </Drawer.Navigator>
    </UserContextProvider>
  )
}

function RootNavigator() {
  const { state: { isLoading, userToken, isSignout } } = React.useContext(AuthContext);

  if (isLoading) {
    // TODO
  }

  return (
    <Stack.Navigator
      initialRouteName={'Auth'}
      screenOptions={{ headerShown: false, animationTypeForReplace: isSignout ? 'pop' : 'push' }}>
      {
        userToken ?
          <Stack.Screen name={'User'} component={DrawerNavigator} options={{ headerShown: false }} />
          :
          <Stack.Screen name={'Auth'} component={AuthStack} options={{ headerShown: false }} />

      }
    </Stack.Navigator>
  );
};

function AuthStack() {

  return (
    <Stack.Navigator
      initialRouteName={'SignIn'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
      <Stack.Screen name={'SignIn'} component={AuthScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen name={'Reset'} component={ResetScreen} />
    </Stack.Navigator>
  )
};