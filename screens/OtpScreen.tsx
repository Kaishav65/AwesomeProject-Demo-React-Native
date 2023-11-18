import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const OtpScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Job');
  };
  return (
    <View style={{ marginTop: Platform.OS === "android" ? 40 : 0, margin: 20 }}>
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
        <View
          style={{
            width: 40,
            height: 2,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 2,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", marginTop: 80 }}>
        <Text style={{ fontSize: 24, fontWeight: "400" }}>Enter the OTP</Text>
        <Text style={{ fontSize: 16, marginTop: 15, color: "grey" }}>
          Check your messages for the OTP and enter that in here. Send to
          +91-9833496915
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
        {/* <View
              style={{
                height: "100%",
                borderColor: "black",
                borderLeftWidth: 2,
                // marginLeft: 10,
                marginRight: 10,
                
              }}
            /> */}
        <TextInput
          onSubmitEditing={handlePress}
          selectionColor="black"
          placeholder="12345"
          keyboardType="numeric"
          style={{ width: 60, height: 24, fontSize: 16, fontWeight: "500" }}
        />
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
