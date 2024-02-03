import React from "react";
import { Pressable, StyleSheet } from "react-native-web";
import { Check } from "lucide-react";
import { BORDER_RADIUS } from "../utils/constants";
import { PropTypes } from 'prop-types';
import colors from "../themes/colors";

const Checkbox = ({ checked = false, style = {}, size = 20 }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [borderColor, backgroundColor] = React.useMemo(() => {
		if (checked) {
			return [colors.primary, colors.primaryLight];
		}
		return [isHovered ? colors.primary : colors.border, colors.bgColor];
	}, [checked, isHovered]);
	return (
		<Pressable
			style={[
				sty.main,
				style,
				{ width: size, height: size, borderColor, backgroundColor },
			]}
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			onPress={() => onChange(!checked)}
		>
			{checked ? <Check color={colors.primary} size={size - 5} /> : null}
		</Pressable>
	);
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	style: PropTypes.object,
	size: PropTypes.number
}

const sty = StyleSheet.create({
	main: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: BORDER_RADIUS,
	},
});

export default Checkbox;