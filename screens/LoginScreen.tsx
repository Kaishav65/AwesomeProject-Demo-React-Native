import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const LoginScreen = () => {
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
          marginTop: 15,
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
      <View style={{ justifyContent: "center", marginTop: 80 }}>
        <Text style={{ fontSize: 24,fontWeight:"400" }}>
         Sign Up or Login with
        </Text>
        <Text style={{ fontSize: 16, marginTop: 15, color: "grey" }}>
        If you are looking to sign-up or login - please enter your mobile number
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderWidth: 1,
          borderColor: "grey",
          padding: 20,
          borderRadius: 10,
            alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>+91</Text>
        <View
          style={{
            height: "100%",
            borderColor: "black",
            borderLeftWidth: 2,
            marginLeft: 10,
            marginRight: 10,
            
          }}
        />
        <TextInput placeholder="1234567890" keyboardType="numeric" style={{ fontSize: 16}} maxLength={10}/>
      </View>
     
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
