import React from "react";
import { Pressable, ActivityIndicator, Text, StyleSheet } from "react-native-web";
import colors from "../themes/colors";
import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";
import { fonts, weights } from "../themes/topography";
import { PropTypes } from 'prop-types';

const HoveredColor = colors.primary + "db";
const Button = ({
	loading = false,
	indicatorSize = 18,
	text = "",
	style = {},
	onPress,
}) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const backgroundColor = isHovered ? HoveredColor : colors.primary;
	return (
		<Pressable
			onPress={onPress}
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			style={[sty.main, { backgroundColor }, style]}
		>
			{loading ? (
				<ActivityIndicator
					size={indicatorSize}
					color={colors.bgColor}
				/>
			) : (
				<Text style={sty.text}>{text}</Text>
			)}
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
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: fonts.subTitle,
		fontWeight: weights.semibold,
		color: colors.bgColor,
	},
});

Button.propTypes = {
	loading: PropTypes.bool,
	indicatorSize: PropTypes.number,
	text: PropTypes.string,
	style: PropTypes.object,
	onPress: PropTypes.func,
}

export default Button;