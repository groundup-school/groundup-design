import React from "react";
import { Pressable, Text, StyleSheet } from "react-native-web";
import colors from "../themes/colors";
import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";
import { fonts, weights } from "../themes/topography";

const Button = ({ text = "", style = {}, onPress }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const borderColor = isHovered ? colors.primary : colors.bgColor;
	return (
		<Pressable
			onPress={onPress}
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			style={[sty.main, { borderColor }, style]}
		>
			<Text style={sty.text}>{text}</Text>
		</Pressable>
	);
};

const sty = StyleSheet.create({
	main: {
		height: INPUT_HEIGHT,
		width: "100%",
		borderRadius: BORDER_RADIUS,
		borderWidth: 1,
		borderColor: colors.border,
		backgroundColor: colors.primaryLight,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: fonts.subTitle,
		fontWeight: weights.semibold,
		color: colors.primary,
	},
});

export default Button;