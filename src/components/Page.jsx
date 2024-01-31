import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import { weights } from "../themes/topography";
import colors from "../themes/colors";

const Page = ({ title, children }) => {
	return (
		<View style={style.main}>
			<View style={style.header}>
				<Text style={style.title}>{title}</Text>
			</View>
			{children}
		</View>
	);
};

const style = StyleSheet.create({
	main: {
		flex: 1,
	},
	header: {
		height: 50,
		paddingLeft: 15,
		width: "100%",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderColor: colors.border,
	},
	title: {
		fontSize: 16,
		fontWeight: weights.bold,
		color: colors.text,
	},
});

export default Page;