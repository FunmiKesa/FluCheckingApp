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
import Colors from "../assets/Colors";
import Header from "./Header";
import { FluService } from "./service";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  temperature: Yup.number("This is not a number.").required()
});
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              hadFever: "yes",
              temperature: "",
              hadCough: "yes"
            }}
            onSubmit={values => {
              const fluService = new FluService();
              fluService
                .upload(values)
                .then(function(response) {
                  if (response.status == 200) {
                    // Alert.alert("Uploaded Successfully.");
                    status = fluService.hasFlu(values);
                    console.log(status);
                    if (status) {
                      Alert.alert("You have a flu.");
                    } else {
                      Alert.alert("You do not have a flu.");
                    }
                  } else {
                    Alert.alert("Upload Failed!!!");
                  }
                })
                .catch(error => {
                  Alert.alert("Upload Failed!!!");
                });
              Keyboard.dismiss();
            }}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <View style={styles.box}>
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
                <View style={styles.box}>
                  <Text style={styles.textLabel}>
                    What is your temperature?
                  </Text>
                  <TextInput
                    label="(Temperature reading from a thermometer)"
                    name="temperature"
                    onChangeText={handleChange("temperature")}
                    value={values.temperature}
                    placeholder="80"
                  />
                  {errors.temperature && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.temperature}
                    </Text>
                  )}
                </View>
                <View style={styles.box}>
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

                <Button
                  onPress={handleSubmit}
                  style={styles.button}
                  color={Colors.white}
                >
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
    marginBottom: 30,
    backgroundColor: Colors.primary,
    color: Colors.white
  },
  textLabel: {
    fontSize: 20,
    fontWeight: "100",
    color: Colors.black,
    marginTop: 20,
    bottom: 10
  },
  input: {
    paddingLeft: 20
  },
  box: {
    paddingBottom: 20,
    backgroundColor: Colors.lighter,
    padding: 10,
    marginBottom: 10
  }
});
