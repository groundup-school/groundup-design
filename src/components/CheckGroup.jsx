import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native-web";
import { Check, X } from "lucide-react";
import { PropTypes } from "prop-types";
import colors from "../themes/colors";

/**
 * MultiSelect Chips
 */
const CheckGroup = ({
	options = [],
	selected = [],
	iconSize = 14,
	coverStyle = {},
	onChange,
}) => {
	const selectedSet = React.useMemo(() => new Set(selected), [selected]);

	const handlePress = (option) => {
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

	const renderOption = (option) => {
		const selected = selectedSet.has(option.value);
		return (
			<Chip
				iconSize={iconSize}
				label={option.label}
				selected={selected}
				key={option.value}
				onPress={() => handlePress(option)}
			/>
		);
	};
	return (
		<View style={[style.main, coverStyle]}>
			{options.map(renderOption)}
		</View>
	);
};

const Chip = ({ selected, label, iconSize }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const isActive = selected || isHovered;
	const borderColor = isActive ? colors.primary : colors.border;
	const color = isActive ? colors.primary : colors.placeholder;
	return (
		<Pressable
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
			style={[style.chip, { borderColor }]}
		>
			<Text style={[style.label, { color }]}>{label}</Text>
			{selected ? (
				<X size={iconSize} color={color} />
			) : (
				<Check size={iconSize} color={color} />
			)}
		</Pressable>
	);
};

const style = StyleSheet.create({
	main: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	chip: {
		margin: 5,
		paddingHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		height: 30,
		flexDirection: "row",
		borderWidth: 1,
		borderRadius: 100,
		alignItems: "center",
	},
	label: {
		fontSize: 14,
		marginRight: 5,
	},
});

CheckGroup.propTypes = {
	selected: PropTypes.array,
	iconSize: PropTypes.number,
	coverStyle: PropTypes.object,
	iconSize: PropTypes.number,
	options: PropTypes.array,
	onChange: PropTypes.func,
};

export default CheckGroup;