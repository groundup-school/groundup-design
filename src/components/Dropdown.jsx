import React from "react";

// Components
import { View, Text, Pressable, StyleSheet } from "react-native-web";
import { ChevronDown } from "lucide-react";
import Menu from "./Menu.jsx";

// Constants
import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";
import colors from "../themes/colors";

function Dropdown({
  placeholder = "",
  options = [],
  style = {},
  selected = null,
  onSelect = null,
}) {
  const menuRef = React.useRef();
  const color = selected?.label ? colors.text : colors.placeholder;
  const showOptions = (nativeEvent) => {
    const element = Menu.transfromView(nativeEvent);
    menuRef.current.show(options, element, onSelect);
  };
  return (
    <>
      <Pressable onPress={showOptions} style={[sty.main, style]}>
        <Text style={[sty.label, { color }]}>
          {selected?.label || placeholder}
        </Text>
        <View style={sty.icon}>
          <ChevronDown size={12} color={color} />
        </View>
      </Pressable>
      <Menu ref={menuRef} />
    </>
  );
}

const sty = StyleSheet.create({
  main: {
    height: INPUT_HEIGHT,
    width: "100%",
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: colors.border,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: INPUT_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: colors.placeholder,
  },
});

export default Dropdown;