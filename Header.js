"use strict";

import React from "react";
import { Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Colors from "./Colors";

const Header = () => (
  <ImageBackground
    accessibilityRole={"image"}
    source={require("./logo.png")}
    style={styles.pic}
    imageStyle={styles.logo}
  >
    <Text style={styles.text}>Flu Checker</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  pic: {
    // paddingBottom: 40,
    paddingTop: 50,
    // paddingHorizontal: 32,
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
    color: "rgb(68, 63, 63)",
    fontWeight: "bold",
    bottom: 0
  }
});

export default Header;
