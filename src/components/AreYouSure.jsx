import React from "react";
import { View, StyleSheet, Text } from "react-native-web";
import BorderPressable from "./BorderPressable.jsx";
import Dailog from "./Dailog.jsx";
import colors from "../themes/colors";
import { fonts, weights } from "../themes/topography";

const AreYouSure = (props, ref) => {
	React.useImperativeHandle(ref, () => ({
		open,
	}));
	const [visible, setVisible] = React.useState(false);
	const [currentText, setText] = React.useState("");

	const open = (text) => {
		setVisible(true);
		setText(text);
	};

	return (
		<Dailog
			width={300}
			title="Are you sure!"
			visible={visible}
			onClose={() => setVisible(false)}
		>
			<View style={style.main}>
				<Text style={style.text}>{currentText}</Text>
			</View>
			<View style={style.footer}>
				<BorderPressable
					onPress={() => {
						setVisible(false);
						if (props?.onYes) {
							props?.onYes();
						}
					}}
					style={[style.btn, { borderRightWidth: 1 }]}
				>
					<Text style={style.btnTxt}>Yes</Text>
				</BorderPressable>
				<BorderPressable
					onPress={() => {
						setVisible(false);
						if (props?.onNo) {
							props?.onNo();
						}
					}}
					style={[style.btn, { borderLeftWidth: 1 }]}
				>
					<Text style={style.btnTxt}>No</Text>
				</BorderPressable>
			</View>
		</Dailog>
	);
};

const style = StyleSheet.create({
	main: {
		paddingBottom: 15,
		paddingHorizontal: 10,
	},
	bar: {
		marginTop: 15,
	},
	text: {
		color: colors.alertRed,
		fontSize: fonts.subTitle,
		marginTop: 15,
	},
	footer: {
		height: 40,
		borderColor: colors.border,
		flexDirection: "row",
		width: "100%",
	},
	btn: {
		width: "50%",
		borderWidth: 0,
		borderTopWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btnTxt: {
		fontSize: fonts.subTitle,
		fontWeight: weights.semibold,
	},
});

export default React.forwardRef(AreYouSure);