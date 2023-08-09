import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/home/Profile';
import Home from '../screens/home/Home';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import {ProfileTabTitle} from '../profileTabTitle/ProfileTabTitle';
import { ProfileTabPost, ProfileTabSaved, ProfileTabVideo } from '../ProfileTabPost/ProfileTabPost';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();



const Tab2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarStyle: {elevation: 0, zIndex: 0},
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={ProfileTabVideo}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Videos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={ProfileTabSaved}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};
