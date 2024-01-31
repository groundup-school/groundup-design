import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import Loader from "./Loader.jsx";
import colors from "../themes/colors";
import { fonts } from "../themes/topography";

const Preloader = ({
	isLoading = false,
	isEmpty = false,
	emptyText = "No records found!",
	emptyBtn = null,
	children,
	emptyCustom = null
}) => {
	if (isLoading) {
		return (
			<View style={style.main}>
				<Loader stroke={colors.text} width={35} speed={1.5} />
			</View>
		);
	}

	if (isEmpty) {
		if (typeof emptyCustom === 'function') {
			return emptyCustom();
		}
		return (
			<View style={style.main}>
				<Text style={style.text}>{emptyText}</Text>
				{emptyBtn ? null : null}
			</View>
		);
	}

	return children;
};

const style = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: fonts.title,
		color: colors.text,
	}
});

export default React.memo(Preloader);