import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utility/colors";
import Options from "../screens/Options";
import AddContact from "../screens/AddContact"; // Import AddContact component

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const getDrawerItemIcon =
  (icon) =>
  ({ tintColor }) =>
    <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />;

const getTabBarIcon =
  (icon) =>
  ({ tintColor }) =>
    <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />;

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOption={{
        headerShown: false, //jnkj
        /*headerTintColor: 'white',
                    headerStyle: {backgroudColor: 'tomato'},
                    headerTitleAlign: 'center',*/
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={({ navigation }) => ({
          title: "Contacts",
          headerShown: true,
          headerRight: () => (
            <MaterialIcons
              name="add"
              size={24}
              style={{ color: "black", marginRight: 10 }}
              onPress={() => navigation.navigate("AddContact")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        // screenOptions={{ headerShown: true,  "black" }}
        options={({ route, navigation }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name,
            color: "black",
            headerTintColor: "white",
            headerStyle: {
              backgroudColor: colors.blue,
            },
            headerLeft: () => (
              <MaterialIcons
                name="arrow-back"
                size={24}
                style={{ color: "black", marginLeft: 10 }}
                onPress={() => navigation.goBack()}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{ title: "Add Contact" }}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back"
              size={24}
              style={{ color: "black", marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ContactsScreens">
        <Drawer.Screen
          name="Contacts"
          component={ContactsScreens}
          options={{
            drawerIcon: getDrawerItemIcon("list"),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreens}
          options={{
            drawerIcon: getDrawerItemIcon("star"),
          }}
        />
        <Drawer.Screen
          name="Users"
          component={UserSreens}
          options={{
            drawerIcon: getDrawerItemIcon("person"),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const UserSreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ color: "white", marginRight: 10 }}
              onPress={() => navigation.navigate("Options")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ title: "Options" }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export default DrawerNavigator;
