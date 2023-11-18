import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import FirstNameScreen from './screens/FirstNameScreen';
import AddPhotosScreens from './screens/AddPhotosScreens';
import BirthDateScreen from './screens/BirthDateScreen';
import GenderScreen from './screens/GenderScreen';
import JobTitleScreen from './screens/JobTitleScreen';
import WorkScreen from './screens/WorkScreen';
import ReligionScreen from './screens/ReligionScreen';
import CommunityScreen from './screens/CommunityScreen';
// import  {QualificationScreen } from './screens/QualificationScreen';
import  {IncomeScreen } from './screens/IncomeScreen';
import StackNavigation from './components/StackNavigation';

export default function App() {
  return (
    <StackNavigation />
    
  //<HomeScreen/>

// <ProfileScreen/>  

// <LoginScreen/>

//<OtpScreen/> 

    // <JobTitleScreen/>

    // <FirstNameScreen/>

    //  <AddPhotosScreens/>

    // <BirthDateScreen/>

    // <GenderScreen/>

    // <WorkScreen/>

    // <ReligionScreen/>
    // <CommunityScreen/>
    // <QualificationScreen/>
    // <IncomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
