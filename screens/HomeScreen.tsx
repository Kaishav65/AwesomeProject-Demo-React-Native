import { Pressable, StyleSheet, Text, View } from "react-native";
import React,{useEffect} from "react";
// import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the ProfileScreen after 2 seconds
      navigation.navigate('Profile');
    }, 3000);

    // Clear the timeout if the component is unmounted before 2 seconds
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View
     style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 24.55,
            height: 24.55,
            backgroundColor: "#F8AF41",
            borderRadius: 50,
          }}
        />
        <Text style={{ fontSize: 36.82, fontWeight: "800" }}>haldi</Text>
      </View>
  </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
