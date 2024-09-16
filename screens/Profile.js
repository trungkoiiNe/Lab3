import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from "react-native";
import { fetchRandomContact } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
import colors from "../utility/colors";
import * as Linking from "expo-linking"
const Profile = ({ route }) => {
  const [setContact] = useState({});

  useEffect(() => {
    fetchRandomContact().then((contact) => setContact(contact));
  }, []);
  const { contact } = route.params;
  const { avatar, name, email, phone, cell } = contact;
  const call = (number) => {
    const phoneNumber = `tel:${number}`;
    Linking.openURL(phoneNumber);
  };
  const emailTo = (email) => {
    const emailAddress = `mailto:${email}`;
    Linking.openURL(emailAddress);
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <TouchableOpacity onPress={()=> emailTo(email)}><DetailListItem icon="email" title="Email" subtitle={email}  /></TouchableOpacity>
        <TouchableOpacity onPress={()=> call(phone)}><DetailListItem icon="phone" title="Work" subtitle={phone}  /></TouchableOpacity>
        <TouchableOpacity onPress={()=> call(cell)}><DetailListItem icon="phone" title="Cell" subtitle={cell}  /></TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
