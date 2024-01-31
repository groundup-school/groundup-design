import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native-web";
import BorderPressable from "./BorderPressable.jsx";
import { fonts, weights } from "../themes/topography";
import colors from "../themes/colors";
import { X } from "lucide-react";

const Dailog = ({
	visible = false,
	children,
	width = 300,
	minHeight = undefined,
	onClose,
	title
}) => {
	return (
		<Modal animationType="fade" visible={visible} onRequestClose={onClose} transparent>
			<View style={style.main}>
				<View style={[style.content, { width, minHeight }]}>
					<View style={style.header}>
						<Text style={style.title}>{title}</Text>
						<BorderPressable onPress={onClose} style={style.closeBtn}>
							<X size={20} color={colors.text} />
						</BorderPressable>
					</View>
					{children}
				</View>
			</View>
		</Modal>
	);
};

const style = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.bgTrans
	},
	content: {
		backgroundColor: colors.bgColor,
		borderRadius: 10,
	},
	header: {
		height: 50,
		borderBottomWidth: 1,
		borderColor: colors.border,
		paddingLeft: 12,
		flexDirection: "row",
		alignItems: "center"
	},
	title: {
		fontSize: fonts.title,
		fontWeight: weights.bold,
		color: colors.text,
	},
	closeBtn: {
		position: "absolute",
		right: 10,
		borderRadius: 100,
		width: 35,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Dailog;