import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import Clipboard from "@react-native-clipboard/clipboard";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../utility/colors";
import * as Clipboard from "expo-clipboard";

const DetailListItem = ({ icon, title, subtitle }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(subtitle); // Use Clipboard.setStringAsync
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <Icon name={icon} size={20} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{subtitle}</Text>
          <TouchableOpacity onPress={handleCopy} style={{ marginLeft: 10 }}>
            <Text style={{ color: "blue" }}>{copied ? "Copied!" : "Copy"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailListItem;

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});
