import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import { PropTypes } from "prop-types";
import colors from "../themes/colors";

const Separator = ({ mv = 10, width = "100%", text = "OR" }) => {
	return (
		<View style={[style.main, { marginVertical: mv, width }]}>
			<View style={style.line} />
			<Text style={style.text}>{text}</Text>
			<View style={style.line} />
		</View>
	)
};

const style = StyleSheet.create({
	main: {
		flexDirection: "row",
		alignItems: 'center'
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: colors.border
	},
	text: {
		color: colors.border,
		marginHorizontal: 6 
	}
});

Separator.propTypes = {
	width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	mv: PropTypes.number,
	text: PropTypes.string,
}

export default Separator;