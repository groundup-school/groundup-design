import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native-web";
import { Check } from "lucide-react";
import { BORDER_RADIUS } from "../utils/constants";
import { PropTypes } from "prop-types";
import colors from "../themes/colors";

const Checkbox = ({
	onChange,
	text = "",
	checked = false,
	textStyle = {},
	style = {},
	size = 20,
}) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [borderColor, color, backgroundColor] = React.useMemo(() => {
		if (checked) {
			return [colors.primary, colors.primary, colors.primaryLight];
		}
		const brc = isHovered ? colors.primary : colors.border;
		const tc = isHovered ? colors.primary : colors.placeholder;
		return [brc, tc, colors.bgColor];
	}, [checked, isHovered]);
	return (
		<Pressable
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			onPress={() => onChange(!checked)}
			style={[sty.cover, style]}
		>
			<View
				style={[
					sty.main,
					{ width: size, height: size, borderColor, backgroundColor },
				]}
			>
				{checked ? (
					<Check color={colors.primary} size={size - 4} />
				) : null}
			</View>

			<Text style={[sty.text, textStyle, { color }]}>{text}</Text>
		</Pressable>
	);
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	style: PropTypes.object,
	size: PropTypes.number,
	text: PropTypes.string,
	textStyle: PropTypes.object,
	onChange: PropTypes.func,
};

const sty = StyleSheet.create({
	main: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: BORDER_RADIUS,
	},
	cover: {
		width: 200,
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		marginLeft: 10,
		fontSize: 14,
	},
});

export default Checkbox;