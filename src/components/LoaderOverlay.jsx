import React from "react";
import { View, StyleSheet } from "react-native-web";
import Loader from "./Loader.jsx";
import colors from "../themes/colors";

const LoaderOverlay = ({ visible }) => {
	return (
		<View style={style.loader}>
			<Loader stroke={colors.primary} />
		</View>
	);
};

const style = StyleSheet.create({
	loader: {
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default LoaderOverlay;