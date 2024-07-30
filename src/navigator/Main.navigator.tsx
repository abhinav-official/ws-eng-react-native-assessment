import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Routes } from './Routes';
import activityImage from '../../assets/activity.svg';
import bookmarksImage from '../../assets/bookmark.svg';
import discoverImage from '../../assets/discover.svg';
import homeImage from '../../assets/home.svg';
import profileImage from '../../assets/profile.svg';
import ActivityScreen from '../screens/activity/Activity.screen';
import BookmarksScreen from '../screens/bookmarks/Bookmarks.screen';
import DiscoverScreen from '../screens/discover/Discover.screen';
import HomeScreen from '../screens/home/Home.screen';
import ProfileScreen from '../screens/profile/Profile.screen';

const Tab = createBottomTabNavigator();

const tabBarStyle = StyleSheet.create({
    tabImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    tabBar: {
        backgroundColor: '#000',
    },
    tabBarLabel: {
        textTransform: 'capitalize',
    },
});

const MainNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={Routes.home}
            backBehavior="none"
            screenOptions={({ route }) => ({
                tabBarLabelStyle: [tabBarStyle.tabBarLabel],
                tabBarStyle: tabBarStyle.tabBar,
                tabBarActiveTintColor: 'white',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconImage;

                    switch (route.name) {
                        case Routes.home:
                            iconImage = homeImage;
                            break;
                        case Routes.discover:
                            iconImage = discoverImage;
                            break;
                        case Routes.activity:
                            iconImage = activityImage;
                            break;
                        case Routes.bookmarks:
                            iconImage = bookmarksImage;
                            break;
                        case Routes.profile:
                            iconImage = profileImage;
                            break;
                        default:
                            iconImage = homeImage;
                            break;
                    }

                    return (
                        <Image
                            source={iconImage}
                            style={[tabBarStyle.tabImage, { tintColor: focused ? 'white' : 'grey' }]}
                        />
                    );
                },
            })}>
            <Tab.Screen name={Routes.home} options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name={Routes.discover} component={DiscoverScreen} />
            <Tab.Screen name={Routes.activity} component={ActivityScreen} />
            <Tab.Screen name={Routes.bookmarks} component={BookmarksScreen} />
            <Tab.Screen name={Routes.profile} component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default MainNavigator;
