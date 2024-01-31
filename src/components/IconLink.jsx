import React from "react";
import { Pressable, StyleSheet, Text } from "react-native-web";
import colors from "../themes/colors";

const IconLink = ({ style = {}, text = "", onPress, Icon, iconSize = 18, fontSize = 14 }) => {
	const [isHovered, setIsHovered] = React.useState();
	const color = isHovered ? colors.primary : colors.text;
	return (
		<Pressable
			style={[sty.main, style]}
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			onPress={onPress}
		>
			<Icon strokeWidth={1.5} size={iconSize} color={color} />
			<Text style={[sty.text, { color, fontSize }]}>{text}</Text>
		</Pressable>
	);
};

const sty = StyleSheet.create({
	text: {
		marginLeft: 10,
	},
	main: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default IconLink;
