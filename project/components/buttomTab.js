import { StyleSheet, Text, View } from "react-native";
import { useState, useContext, React, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Home from "./Home";
import Settings from "./Settings";
import theme from "./theme";
import themeContext from "./themeContext";

const buttomTab = () => {
  const theme = useContext(themeContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue", // Adjust active tab color
        tabBarInactiveTintColor: "grey", // Adjust inactive tab color
        tabBarActiveBackgroundColor: "red",
        tabBarShowLabel: true, // Hide tab labels
        tabBarInactiveBackgroundColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        style={styles.tabBar}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerTitle: "Home",
          headerStyle: { backgroundColor: theme.backgroundColor },
          headerTitleStyle: { color: "black" },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="access-point-network"
              color={color}
              size={26}
            />
          ),
          headerStyle: { backgroundColor: "grey" },
          headerTitle: "Settings",
          headerStyle: { backgroundColor: theme.backgroundColor },
          headerTitleStyle: { color: "black" },
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default buttomTab;

const styles = StyleSheet.create({});
