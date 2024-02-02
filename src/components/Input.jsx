import React from "react";
import { TextInput, StyleSheet } from "react-native-web";
import colors from "../themes/colors";
import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";

function Input({ onChangeText, placeholder = "", style = {} }) {
	const [focused, setFocused] = React.useState(false);
	const borderColor = focused ? colors.primary : colors.border;
	return (
		<TextInput
			placeholderTextColor={colors.placeholder}
			placeholder={placeholder}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
			onChangeText={onChangeText}
			style={[sty.main, style, { outline: "none", borderColor }]}
		/>
	);
}

const sty = StyleSheet.create({
	main: {
		height: INPUT_HEIGHT,
		width: "100%",
		borderRadius: BORDER_RADIUS,
		borderWidth: 1,
		paddingLeft: 10,
		color: colors.text
	},
});

export default Input;