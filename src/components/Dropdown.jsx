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
  onNoOptions = null,
}) {
  const menuRef = React.useRef();
  const currentItem = React.useMemo(() => {
    const ci = options.find((op) => op.value === selected);
    return ci;
  }, [selected, options]);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [color, borderColor] = React.useMemo(() => {
    if (isHovered || isActive) {
      return [colors.primary, colors.primary];
    }
    return [
      currentItem?.label ? colors.text : colors.placeholder,
      colors.border,
    ];
  }, [isHovered, isActive, currentItem?.label]);
  const showOptions = (nativeEvent) => {
    if (!options?.length && onNoOptions) {
      onNoOptions();
      return;
    }
    setIsActive(true);
    const element = Menu.transfromView(nativeEvent);
    menuRef.current.show(options, element, onSelect);
  };
  return (
    <>
      <Pressable
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        onPress={showOptions}
        style={[sty.main, style, { borderColor }]}
      >
        <Text style={[sty.label, { color }]}>
          {currentItem?.label || placeholder}
        </Text>
        <View style={sty.icon}>
          <ChevronDown size={12} color={color} />
        </View>
      </Pressable>
      <Menu onClose={() => setIsActive(false)} ref={menuRef} />
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