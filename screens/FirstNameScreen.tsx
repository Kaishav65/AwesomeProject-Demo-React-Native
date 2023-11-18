import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const FirstNameScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Add');
  };
  const goBackPress = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === "android" ? 40 : 0,
        margin: 20,
      }}
    >
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
            width: 66,
            height: 2,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 2,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", marginTop: 80 }}>
        <Text style={{ fontSize: 24,fontWeight:"400" }}>What’s your first name</Text>
        <Text style={{ fontSize: 16, marginTop: 15, color: "grey" }}>
          This is what your potential partner would read!
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
        <TextInput placeholder="first name" style={{fontSize:18,fontWeight:"500",marginLeft:5}} />
      </View>
      <Pressable
      onPress={goBackPress}
      style={
        {
          width: 86,
          height: 46,
         
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 7,
          position: "absolute",
          bottom: 20,
          left: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black", fontWeight: "800",fontSize:16 }}>Back</Text>
      </Pressable>
      <Pressable
      onPress={handlePress}
        style={({ pressed }) => [
          {
            width: 86,
            height: 46,
            backgroundColor: pressed ? "#383838" : "#272720",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 7,
            position: "absolute",
            bottom: 20,
            right: 6,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text style={{ color: "white", fontWeight: "800" }}>Next</Text>
      </Pressable>
    </View>
  );
};

export default FirstNameScreen;

const styles = StyleSheet.create({});
