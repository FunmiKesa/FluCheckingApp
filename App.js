import React, { Component } from "react";
import {
  Alert,
  Keyboard,
  Text,
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import { Formik } from "formik";
import { Button, TextInput, RadioButton } from "react-native-paper";
import Colors from "./Colors";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
          <Formik
            initialValues={{
              hadFever: "yes",
              temperature: "",
              hadCough: "yes"
            }}
            onSubmit={values => {
              Alert.alert(JSON.stringify(values, null, 2));
              Keyboard.dismiss();
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <View>
                  <Text style={styles.textLabel}>
                    Have you had fever over the last 5 days?
                  </Text>
                  <RadioButton.Group
                    style={styles.input}
                    onValueChange={handleChange("hadFever")}
                    value={values.hadFever}
                  >
                    <View>
                      <Text>Yes</Text>
                      <RadioButton value="yes" />
                    </View>
                    <View>
                      <Text>No</Text>
                      <RadioButton value="no" />
                    </View>
                  </RadioButton.Group>
                </View>
                <View>
                  <Text style={styles.textLabel}>
                    What is your temperature?
                  </Text>
                  <TextInput
                    label="(Temperature reading from a thermometer)"
                    onChangeText={handleChange("temperature")}
                    value={values.temperature}
                    placeholder="80"
                  />
                </View>
                <View>
                  <Text style={styles.textLabel}>Have you had cough?</Text>
                  <RadioButton.Group
                    style={styles.input}
                    onValueChange={handleChange("hadCough")}
                    value={values.hadCough}
                  >
                    <View>
                      <Text>Yes</Text>
                      <RadioButton value="yes" />
                    </View>
                    <View>
                      <Text>No</Text>
                      <RadioButton value="no" />
                    </View>
                  </RadioButton.Group>
                </View>

                <Button onPress={handleSubmit} style={styles.button}>
                  Submit
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  content: {
    padding: 16
  },
  button: {
    borderRadius: 30,
    marginTop: 16,
    bottom: 30
  },
  textLabel: {
    fontSize: 30,
    fontWeight: "100",
    color: Colors.black,
    marginTop: 20,
    bottom: 10
  },
  input: {
    paddingLeft: 20
  }
});
