import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native-web";
import { PropTypes } from "prop-types";

import { INPUT_HEIGHT, BORDER_RADIUS } from "../utils/constants";
import { fonts, weights } from "../themes/topography";
import colors from "../themes/colors";

/**
 * A ToggleGroupButton is a GUI element that can be in either an "on" or "off" state, toggling between them when clicked.
 * It is commonly used for binary choices in graphical applications.
 */
const ToggleGroupButton = ({
	onChange = null,
	style = {},
	selected = [],
	options = [],
}) => {
	const selectedSet = React.useMemo(() => new Set(selected), [selected]);

	const handleChange = (option) => {
		if (typeof onChange !== "function") {
			return;
		}
		const currentSet = new Set(selectedSet);
		if (currentSet.has(option.value)) {
			currentSet.delete(option.value);
		} else {
			currentSet.add(option.value);
		}
		const newOptions = Array.from(currentSet);
		onChange(newOptions);
	};

	const renderButton = (option, idx) => {
		const selected = selectedSet.has(option.value);
		return (
			<SelectButton
				key={option.value}
				isFirst={idx === 0}
				option={option}
				selected={selected}
				onPress={() => handleChange(option)}
			/>
		);
	};

	return <View style={[sty.main, style]}>{options.map(renderButton)}</View>;
};

const SelectButton = ({
	selected = false,
	isFirst,
	option = {},
	onPress,
}) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [backgroundColor, color, borderLeftWidth, marginLeft] =
		React.useMemo(() => {
			const active = isHovered || selected;
			const bc = active ? colors.primaryLight : colors.bgColor;
			const tc = active ? colors.primary : colors.placeholder;

			const blw = isFirst ? 0 : 1;
			const ml = option?.renderIcon ? 5 : 0;
			return [bc, tc, blw, ml];
		}, [isHovered, selected, isFirst]);

	return (
		<Pressable
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			onPress={onPress}
			style={[
				sty.option,
				{ backgroundColor, borderLeftWidth },
			]}
		>
			{option?.renderIcon ? option?.renderIcon() : null}
			<Text style={[sty.text, { color, marginLeft }]}>
				{option.label}
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
		borderColor: colors.border,
		backgroundColor: colors.bgColor,
		flexDirection: "row",
	},
	option: {
		borderColor: colors.border,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	text: {
		fontSize: fonts.subTitle,
		fontWeight: weights.semibold,
		color: colors.bgColor,
	},
});

ToggleGroupButton.propTypes = {
	/**
	 * Event invocked when clicked with new selected state
	 */
	onChange: PropTypes.func,
	/**
	 * react native style
	 */
	style: PropTypes.object,
	/**
	 * Options to rendered for group
	 */
	options: PropTypes.array,
	/**
	 * Current selected values
	 */
	selected: PropTypes.array,
};

export default ToggleGroupButton;