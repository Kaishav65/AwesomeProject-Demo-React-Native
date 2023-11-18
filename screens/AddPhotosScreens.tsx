import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const AddPhotosScreens = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Birth");
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
            width: 82.5,
            height: 2,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 2,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", marginTop: 80 }}>
        <Text style={{ fontSize: 25 }}>Add your first 2 photos</Text>
        <Text style={{ fontSize: 16, marginTop: 15, color: "grey" }}>
          Make sure these are simple, a bright smile would definitely help :)
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderColor: "grey",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 157,
            height: 157,
            flexDirection: "row",
            marginRight: 10,
            borderWidth: 1,
            borderColor: "grey",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="add" size={24} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 157,
            height: 157,
            borderWidth: 1,
            borderColor: "grey",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="add" size={24} color="black" />
        </View>
      </View>
      <Pressable
      onPress={goBackPress}
        style={{
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
        <Text style={{ color: "black", fontWeight: "800", fontSize: 16 }}>
          Back
        </Text>
      </Pressable>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          {
            width: 86,
            height: 46,
            backgroundColor: pressed ? "#383838" : "#272727",
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

export default AddPhotosScreens;

const styles = StyleSheet.create({});
