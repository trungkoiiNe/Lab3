import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
// import { Linking } from "react-native";
import * as Linking from "expo-linking";

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = {
    color: textColor,
  };
  const ImageComponent = onPress ? TouchableOpacity : View;
  const call = (number) => {
    const phoneNumber = `tel:${number}`;
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== "" && <Text style={[styles.name, colorStyle]}>{name}</Text>}
      {phone !== "" && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} />
          <TouchableOpacity onPress={() => call(phone)}>
            <Text style={[styles.phone, colorStyle]}>{phone}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default ContactThumbnail;

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};
ContactThumbnail.defaultProps = {
  name: "",
  phone: "",
  textColor: "white",
  onPress: null,
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: "bold",
  },
  phoneSection: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
});
