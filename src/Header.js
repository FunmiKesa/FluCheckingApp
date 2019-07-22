"use strict";

import React from "react";
import { Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Colors from "../assets/Colors";

const Header = () => (
  <ImageBackground
    accessibilityRole={"image"}
    source={require("../assets/logo.png")}
    style={styles.pic}
    imageStyle={styles.logo}
  >
    <Text style={styles.text}>Flu Checker</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  pic: {
    paddingTop: 50,
    width: Dimensions.get("window").width,
    backgroundColor: Colors.lighter,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  logo: {
    flex: 1,
    resizeMode: "cover",
    marginTop: 30
  },
  text: {
    marginTop: 70,
    fontSize: 20,
    padding: 20,
    textAlign: "center",
    fontFamily: "Cochin",
    color: Colors.black,
    fontWeight: "bold",
    bottom: 0
  }
});

export default Header;
