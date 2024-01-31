import React from "react";
import { Pressable } from "react-native-web";
import colors from "../themes/colors";

const BorderPressable = ({ children, style = {}, onPress }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const borderColor = isHovered ? colors.primary : colors.border;
	const bgColor = isHovered ? colors.primaryLight : colors.bgColor;
	return (
		<Pressable
			onPress={onPress}
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			style={[{ borderWidth: 1, borderColor, backgroundColor: bgColor }, style]}
		>
			{children}
		</Pressable>
	);
};

export default BorderPressable;