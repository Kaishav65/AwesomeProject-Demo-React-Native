import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {NavigationContainer } from "@react-navigation/native";
import OtpScreen from "../screens/OtpScreen";
import JobTitleScreen from "../screens/JobTitleScreen";
import FirstNameScreen from "../screens/FirstNameScreen";
import AddPhotosScreens from "../screens/AddPhotosScreens";
import BirthDateScreen from "../screens/BirthDateScreen";
import GenderScreen from "../screens/GenderScreen";
import WorkScreen from "../screens/WorkScreen";
import ReligionScreen from "../screens/ReligionScreen";
import CommunityScreen from "../screens/CommunityScreen";
import { QualificationScreen } from "../screens/QualificationScreen";
import { IncomeScreen } from "../screens/IncomeScreen";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OTP" component={OtpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Job" component={JobTitleScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Name" component={FirstNameScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Add" component={AddPhotosScreens} options={{headerShown:false}}/>
        <Stack.Screen name="Birth" component={BirthDateScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Gender" component={GenderScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name="Work" component={WorkScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Religion" component={ReligionScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Community" component={CommunityScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Qualification" component={QualificationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Income" component={IncomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
