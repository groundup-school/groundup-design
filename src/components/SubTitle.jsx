import React from "react";
import { Text, View, StyleSheet } from "react-native-web";
import { fonts, weights } from "../themes/topography";
import colors from "../themes/colors";

const SubTitle = ({ text }) => {
	return (
		<View style={style.main}>
			<Text style={style.text}>{text}</Text>
		</View>
	)
};

const style = StyleSheet.create({
	main: {
		height: 35,
		paddingHorizontal: 15,
		borderBottomWidth: 1,
		borderColor: colors.border,
		justifyContent: "center"
	},
	text: {
		fontSize: fonts.subTitle,
		color: colors.text,
		fontWeight: weights.bold
	}
});

export default SubTitle;