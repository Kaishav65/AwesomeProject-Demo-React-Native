import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const CommunityScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Qualification');
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
            width: 231,
            height: 2,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 2,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 25 }}>What’s community are you part of?</Text>
        <Text style={{ fontSize: 16, marginTop: 15, color: "grey" }}>
          Make sure you enter your right age. You never want your partner to
          feel you’re older!
        </Text>
      </View>
      <View
        style={{
          //   flexDirection: "row",
          marginTop: 25,
          borderColor: "grey",
          borderRadius: 10,
          //   alignItems: "center",
          //   borderWidth:1
        }}
      >
        <View
          style={{
            // width: 43,
            height: 49,
            flexDirection: "row",
            // marginRight: 8,
            borderWidth: 1,
            borderColor: "grey",
            // padding: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#00000010",
            // marginBottom:8
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 16 }}>
            Gaud Saraswat Brahmin
          </Text>
          <FontAwesome
            name="sort-down"
            size={24}
            color="black"
            style={{ marginRight: 20, marginBottom: 10 }}
          />
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
        <Text style={{ color: "white", fontWeight: "800", fontSize: 16 }}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default CommunityScreen;

// const styles = StyleSheet.create({})
