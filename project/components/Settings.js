import { StyleSheet, Text, View, Switch } from "react-native";
import { useState, useContext, React, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import theme from "./theme";
import themeContext from "./themeContext";
const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);
  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{ false: "grey", true: "red " }}
        thumbColor={isEnabled ? "white" : "white"}
        onValueChange={(value) => {
          setDarkMode(value);
          EventRegister.emit("ChangeTheme", value);
        }}
        value={darkMode}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
