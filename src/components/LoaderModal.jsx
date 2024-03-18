import React from "react";
import { View, Modal, StyleSheet } from "react-native-web";
import Loader from "./Loader.jsx";
import colors from '../themes/colors';

const LoaderModal = ({ visible }) => {
	return (
		<Modal transparent visible={visible} animationType="fade">
			<View style={style.loader}>
				<Loader stroke={colors.primary} />
			</View>
		</Modal>
	);
};

const style = StyleSheet.create({
	loader: {
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.bgTrans,
	},
});

export default LoaderModal;
