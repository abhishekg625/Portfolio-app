import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";
//import { color } from "react-native-reanimated";
//import { TouchableOpacity } from "react-native-gesture-handler";
import * as OpenAnything from "react-native-openanything";
import { Button } from "react-native";

const onPress = () => {
  Linking.openURL("https://github.com/abhishekg625/Instagrame_Home_UI");
};

const scr = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const colors = {
  themeColor: "#e01059",
  white: "#fff",
  greyish: "#a4a4a4",
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-java",
];

export default function App() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View
        style={{
          backgroundColor: colors.themeColor,
          paddingBottom: scr.height * 0.2,
          borderBottomLeftRadius: scr.width * 0.1,
          borderBottomRightRadius: scr.width * 0.1,
        }}
      >
        <View
          style={{
            paddingHorizontal: 32,
            alignItems: "flex-end",
            marginVertical: 10,
          }}
        >
          {/* <SimpleLineIcons
            name="equalizer"
            size={20}
            style={{ color: colors.white, marginTop: 10 }}
          /> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            marginVertical: 30,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }}
            source={require("./assets/abhi.jpg")}
          />
          <View>
            <Text style={{ fontSize: 20, color: colors.white }}>
              Abhishek Giri
            </Text>
            <Text style={{ color: colors.white, marginBottom: 1 }}>
              Software Developer
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Button
            color="black"
            title=" Call Me"
            onPress={() => OpenAnything.Call("+917985814780")}
          ></Button>
          <Text> </Text>
          <Button
            title=" Resume"
            color="black"
            onPress={() => {
              OpenAnything.Pdf("https://drive.google.com/drive/u/0/my-drive");
            }}
          ></Button>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          marginTop: -scr.height * 0.2,
          elevation: 8,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>Bio</Text>
          <AntDesign name="user" size={20} style={{}} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: colors.greyish }}>
            Hi! I am a software Developer specialised in building cross platform
            apps in React-Native . I deal with projects related to React-js and
            React-Native with Firebase
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 32,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>Skills</Text>
          <MaterialCommunityIcons name="pen" size={20} style={{}} />
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {skillIcons.map((skill) => (
            <View
              key={skill}
              style={{
                width: 48,
                height: 48,
                borderWidth: 2,
                borderRadius: 24,
                padding: 5,
                borderColor: colors.themeColor,
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name={skill}
                size={30}
                style={{
                  color: colors.themeColor,
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 24 }}
      >
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: colors.themeColor,
            marginHorizontal: 8,
            padding: 20,
            borderRadius: 16,
            marginBottom: 16,
            alignItems: "center",
            width: scr.width * 0.7,
          }}
        >
          <Text style={{ color: colors.white, fontSize: 20 }}>
            Insta UI Clone
          </Text>

          <AntDesign
            name="instagram"
            size={150}
            style={{ color: colors.white, marginVertical: 40 }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              padding: 8,
            }}
          >
            View Project
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: colors.themeColor,
            marginHorizontal: 8,
            padding: 20,
            borderRadius: 16,
            marginBottom: 16,
            alignItems: "center",
            width: scr.width * 0.7,
          }}
        >
          <Text style={{ color: colors.white, fontSize: 20 }}>
            Restorant Food Kart UI
          </Text>

          <MaterialCommunityIcons name="food" size={223} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              padding: 8,
            }}
          >
            View Project
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: colors.themeColor,
            marginHorizontal: 8,
            padding: 20,
            borderRadius: 16,
            marginBottom: 16,
            alignItems: "center",
            width: scr.width * 0.7,
          }}
        >
          <Text style={{ color: colors.white, fontSize: 20 }}>ToDo List</Text>

          <MaterialIcons
            name="today"
            size={150}
            style={{ color: colors.white, marginVertical: 40 }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              padding: 8,
            }}
          >
            View Project
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 32,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>Stats</Text>
          <MaterialCommunityIcons name="trending-up" size={20} style={{}} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 50, color: colors.themeColor }}>10+</Text>
          <Text style={{ color: colors.greyish }}> CUPS OF COFEE</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: colors.greyish }}>PROJECTS DONE </Text>
          <Text style={{ fontSize: 50, color: colors.themeColor }}>30+</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 50, color: colors.themeColor }}>5+</Text>
          <Text style={{ color: colors.greyish }}> HAPPY CLIENTS</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 32,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 20, marginLeft: 30 }}>Connect With Me</Text>
          {/* <MaterialCommunityIcons name="pen" size={20} style={{}} /> */}
        </View>
        <ScrollView horizontal style={{ marginVertical: 8, marginLeft: 30 }}>
          <MaterialCommunityIcons
            name="facebook"
            size={35}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/abhishek.giri.5851")
            }
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />

          <MaterialCommunityIcons
            name="instagram"
            size={35}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/humnahibatange")
            }
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
          <MaterialCommunityIcons
            name="github"
            size={35}
            onPress={() => Linking.openURL("https://github.com/abhishekg625")}
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
          <MaterialCommunityIcons
            name="gmail"
            size={35}
            onPress={() => Linking.openURL("mailto:abhishekg625@gmail.com")}
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
          <MaterialCommunityIcons
            name="linkedin"
            size={35}
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/abhishekg625/")
            }
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
