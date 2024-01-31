import React from "react";
import { View, Pressable, StyleSheet } from "react-native-web";
import colors from "../themes/colors";

const Switch = ({ style = {}, selected = false, onChange }) => {
	const [color, bgColor, right, left] = React.useMemo(() => {
		if (selected) {
			return [colors.primary, colors.primaryLight, 3, undefined];
		}
		return [colors.placeholder, colors.border, undefined, 3];
	}, [selected]);
	return (
		<Pressable onPress={() => onChange(!selected)} style={[sty.main, style, { backgroundColor: bgColor }]}>
			<View
				style={[sty.circle, { right, left, backgroundColor: color }]}
			/>
		</Pressable>
	);
};

const sty = StyleSheet.create({
	main: {
		height: 25,
		width: 46,
		alignItems: "center",
		borderRadius: 100,
	},
	circle: {
		height: 20,
		width: 20,
		top: 2.5,
		borderRadius: 100,
		position: "absolute",
	},
});

export default Switch;