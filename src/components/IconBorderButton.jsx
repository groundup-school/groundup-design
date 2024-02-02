import React from "react";
import { Pressable, Text, StyleSheet } from "react-native-web";
import colors from "../themes/colors";
import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";
import { fonts, weights } from "../themes/topography";

const IconBorderButton = ({ renderIcon, text = "", style = {}, onPress }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const color = isHovered ? colors.primary : colors.text;
	const borderColor = isHovered ? colors.primary : colors.border;
	return (
		<Pressable
			onPress={onPress}
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			style={[sty.main, { borderColor }, style]}
		>
			{renderIcon ? renderIcon(color) : null}
			<Text style={[sty.text, { color, marginLeft: renderIcon ? 5 : 0 }]}>
				{text}
			</Text>
		</Pressable>
	);
};

const sty = StyleSheet.create({
	main: {
		height: INPUT_HEIGHT,
		width: "100%",
		borderRadius: BORDER_RADIUS,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row"
	},
	text: {
		fontSize: fonts.subTitle,
		fontWeight: weights.semibold,
		color: colors.primary,
	},
});

export default IconBorderButton;