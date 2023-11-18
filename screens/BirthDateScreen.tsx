import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";

import React from 'react'

const BirthDateScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Work');
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
                width: 132,
                height: 2,
                borderColor: "black",
                borderWidth: 2,
                borderRadius: 2,
              }}
            />
          </View>
          <View style={{ justifyContent: "center", marginTop: 50 }}>
            <Text style={{ fontSize: 24,fontWeight:"400"}}>When is your birthday?</Text>
            <Text style={{ fontSize: 16, marginTop: 15, color: "grey" }}>
            Make sure you enter your right age. You never want your partner to feel you’re older!
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              borderColor: "grey",
              borderRadius: 10,
              alignItems: "center",
            //   borderWidth:1
            }}
          >
            <View
              style={{
                width: 43,
                height: 49,
                flexDirection: "row",
                marginRight: 8,
                borderWidth: 1,
                borderColor: "grey",
                // padding: 20,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#0000001A"
              }}
            >
                <TextInput placeholder="DD" style={{fontSize:20}} keyboardType="numeric" maxLength={2}/>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 43,
                height: 49,
                borderWidth: 1,
                borderColor: "grey",
                // padding: 20,
                marginRight: 8,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#0000001A"
              }}
            >
             <TextInput placeholder="DD" style={{fontSize:20}} keyboardType="numeric" maxLength={2}/>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 65,
                height: 49,
                borderWidth: 1,
                borderColor: "grey",
                // padding: 20,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#0000001A"
              }}
            >
              <TextInput placeholder="YYYY" style={{fontSize:20}} keyboardType="numeric" maxLength={4}/>
            </View>
          </View>
          <Pressable
          onPress={goBackPress}
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
                left: 6,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text style={{ color: "white", fontWeight: "800" }}>Back</Text>
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
}

export default BirthDateScreen

const styles = StyleSheet.create({})