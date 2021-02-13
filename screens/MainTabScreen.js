import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Entypo  from 'react-native-vector-icons/Entypo';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AppointmentScreen from './AppointmentScreen';
import ProfileScreen from './ProfileScreen';
import CategoryListScreen from './CategoryListScreen';
import CategoryItemDetails from './CategoryItemDetails';
import {TouchableOpacity}  from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Explore"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Explore"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#3D9C9C',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="compass"  color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#3D9C9C',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search"  color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarLabel: 'Appointment',
          tabBarColor: '#3D9C9C',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar"  color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#3D9C9C',
          tabBarIcon: ({ color }) => (
            <Entypo name="user"  color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#3D9C9C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Explore" component={HomeScreen} options={{
        title:'Explore',
        headerLeft: () => (
          <View style={{marginLeft:10}}>
            <FontAwesome.Button name="list" size={25} backgroundColor="#3D9C9C" onPress={() =>  navigation.openDrawer()} />
            </View>
        ),
        headerRight: () => (
          <View style={{flexDirection:'row', marginLeft:10}}>
            <FontAwesome.Button name="search" size={25} backgroundColor="#3D9C9C"  onPress={() => {navigation.navigate('Search')}} />
            <TouchableOpacity style={{paddingHorizontal:10 , marginTop:5}} onPress={()=> {navigation.navigate('Profile')}}>
            <Avatar.Image
            source = {require('../assets/profile.jpg')}
            size={30}
            />
            </TouchableOpacity>
            </View>
        )
        }} />
          <HomeStack.Screen 
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen 
        name="CategoryItemDetails"
        component={CategoryItemDetails}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#3D9C9C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Search" component={SearchScreen} options={{
        headerLeft: () => (
          <FontAwesome.Button name="list" size={25} backgroundColor="#3D9C9C" onPress={() => navigation.openDrawer()}></FontAwesome.Button>
          )
        }} />
</DetailsStack.Navigator>
);
  