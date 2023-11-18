import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate('OTP');
  };
  return (
    <View style={{ marginTop: Platform.OS === "android" ? 40 : 0, margin: 20 }}>
      {/* Gray line */}
      <View
        style={{
          width: "100%",
          height: 2,
          borderColor: "grey",
          borderWidth: 2,
          borderRadius: 2,
          backgroundColor: "grey",
          justifyContent: "center",
          marginTop:15
        }}
      >
        {/* Black line inside the gray line */}
        <View
          style={{
            width: 28,
            height: 2,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 2,
          }}
        />
      </View>
      <View style={{justifyContent:"center",marginTop:80}}>
        <Text style={{fontSize:25}}>Who are you creating the profile for?</Text>
        <Text style={{fontSize:16,marginTop:15,color:"grey"}}>Please let us know - who is this profile managed by</Text>
      </View>
      <Pressable
       onPress={handlePress}
      style={{marginTop:20,borderWidth:1,borderColor:"grey",padding:20,borderRadius:10}}>
        <Text style={{fontSize:16,fontWeight:"500"}}>Myself</Text>
        <Text style={{color:"grey",marginTop:6}}>I am creating this platform to find my partner</Text>
      </Pressable>
      <Pressable onPress={handlePress} style={{marginTop:10,borderWidth:1,borderColor:"grey",padding:20,borderRadius:10}}>
        <Text style={{fontSize:16,fontWeight:"500"}}>For my son/daughter</Text>
        <Text style={{color:"grey",marginTop:6}}>I am creating this profile for my son</Text>
      </Pressable>
      <Pressable onPress={handlePress} style={{marginTop:10,borderWidth:1,borderColor:"grey",padding:20,borderRadius:10}}>
        <Text style={{fontSize:16,fontWeight:"500"}}>For my sibling</Text>
        <Text style={{color:"grey",marginTop:6}}>I am creating this profile for my siblings</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
