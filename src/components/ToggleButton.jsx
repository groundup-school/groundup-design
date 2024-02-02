import React from "react";
import { Pressable, StyleSheet, Text } from "react-native-web";
import { PropTypes } from "prop-types";

import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";
import { fonts, weights } from "../themes/topography";
import colors from "../themes/colors";

/**
 * A ToggleButton is a GUI element that can be in either an "on" or "off" state, toggling between them when clicked.
 * It is commonly used for binary choices in graphical applications.
 */
const ToggleButton = ({
	text = "",
	onChange = null,
	style = {},
	renderIcon = null,
	selected = false,
}) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [borderColor, color] = React.useMemo(() => {
		const active = isHovered || selected;
		const bc = active ? colors.primary : colors.border;
		const tc = active ? colors.primary : colors.placeholder;
		return [bc, tc];
	}, [isHovered, selected]);

	return (
		<Pressable
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			onPress={() => onChange(!selected)}
			style={[sty.main, { borderColor }, style]}
		>
			{renderIcon ? renderIcon(color, borderColor) : null}
			<Text style={[sty.text, { color }]}>{text}</Text>
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
		backgroundColor: colors.bgColor,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: fonts.subTitle,
		fontWeight: weights.semibold,
		color: colors.bgColor,
	},
});

ToggleButton.propTypes = {
	/**
	 * Text visible on button
	 */
	text: PropTypes.string,
	/**
	 * Event invocked when clicked with new selected state
	 */
	onChange: PropTypes.func,
	/**
	 * react native style
	 */
	style: PropTypes.object,
	/**
	 * Function to render any react component
	 */
	renderIcon: PropTypes.func,
	/**
	 * Selected state for button
	 */
	selected: PropTypes.bool,
};

export default ToggleButton;