import React, { Component } from "react";
import { View, Text, Pressable } from "react-native-web";
import {
	BORDER_RADIUS,
	INPUT_HEIGHT,
	WINDOW_HALF_HEIGHT,
	YYYYMMDD,
	MMMMDDYYYY
} from "../utils/constants";
import colors from "../themes/colors";
import { Calendar } from 'lucide-react';
import DatePicker from "./dateTime/Date.jsx";
import OverlayPortal from "./OverlayPortal.jsx";
import shadows from "../themes/shadows";
import moment from 'moment';
import { PropTypes } from "prop-types";

class DateInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			busy: false,
			err: false,
			pickerVisible: false,
			countries: [],
			visibleCountries: [],
			popupStyle: {},
			selected: "",
		};
		this.timeout = null;
	}

	showPicker = (selected) => {
		this.inputHolder.measure((fx, fy, width, height, leftx, top) => {
			const topAdjusted =
				top > WINDOW_HALF_HEIGHT ? top - 280 : top + height;
			const popupStyle = {
				top: topAdjusted,
				left: leftx,
			};
			this.setState({
				popupStyle,
				pickerVisible: true,
			});
		});
	};

	handleSelect = (selected) => {
		this.setState({ pickerVisible: false }, () => {
			this.props?.onSelect(selected);
		});
	};

	closePicker = (event) => {
		const countryPicker = document.getElementById("datePicker");
		if (!countryPicker?.contains(event.relatedTarget)) {
			this.setState({ pickerVisible: false });
		}
	};

	handleLayout = ({
		nativeEvent: {
			layout: { top, left, height },
		},
	}) => {
		const topAdjusted = top > WINDOW_HALF_HEIGHT ? top - 280 : top + height;
		this.setState({
			popupStyle: {
				top: topAdjusted,
				left,
			},
		});
	};

	renderOverlay = () => {
		const props = this.props;
		const { popupStyle } = this.state;
		return (
			<Pressable
				id="datePicker"
				activeOpacity={1}
				style={[style.popup, popupStyle]}
				onBlur={this.closePicker}
			>
				<DatePicker
					value={props?.value}
					width={popupStyle.width}
					onChange={this.handleSelect}
				/>
			</Pressable>
		);
	};

	render() {
		const props = this.props;
		const { pickerVisible } = this.state;
		const borderColor = pickerVisible
			? colors.primary
			: colors.color;
		const color = props?.value ? colors.text : colors.placeholder;
		const formattedDate = props?.value
			? moment(props?.value, YYYYMMDD).format(MMMMDDYYYY)
			: props?.placeholder;
		return (
			<>
				<Pressable
					style={[defaultStyle, props.style, { borderColor }]}
					ref={(ref) => (this.inputHolder = ref)}
					onPress={this.showPicker}
					onBlur={this.closePicker}
				>
					<Text style={[style.inputStyle, props?.textStyle, { color }]}>
						{formattedDate}
					</Text>
					<View style={style.dateIcon}>
						<Calendar
							size={17}
							color={colors.placeholder}
						/>
					</View>
				</Pressable>
				<OverlayPortal>
					{pickerVisible ? this.renderOverlay() : null}
				</OverlayPortal>
			</>
		);
	}
}

const defaultStyle = {
	borderColor: colors.border,
	borderRadius: BORDER_RADIUS,
	borderWidth: 1,
	height: INPUT_HEIGHT,
	flexDirection: "row",
	alignItems: "center",
	paddingHorizontal: 10,
	overflow: "hidden",
	outline: "none",
};

const style = {
	inputStyle: {
		paddingLeft: 5,
		width: "100%",
	},
	dateIcon: {
		width: 30,
		height: "100%",
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
	},
	popup: {
		position: "absolute",
		overflow: "hidden",
		borderRadius: BORDER_RADIUS,
		borderColor: colors.border,
		backgroundColor: colors.popupBg,
		borderWidth: 1,
		zIndex: 1000000,
		width: 290,
		outline: "none",
		cursor: "default",
		elevation: 20,
		boxShadow: shadows.basic,
	},
	pickerHeader: {
		height: 40,
		width: "100%",
		borderBottomWidth: 1,
		borderColor: colors.border,
		flexDirection: "row",
		alignItems: "center",
	},
};

DateInput.defaultProps = {
	style: {},
	onSelect: () => {},
	textStyle: {},
	value: "",
	placeholder: "Select Date"
};

DateInput.propTypes = {
	style: PropTypes.object,	
	onSelect: PropTypes.func,
	textStyle: PropTypes.object,
	/**
	 * Value (YYYY-MM-DD) is controlled externally by parent component
	 */
	value: PropTypes.string,
	/**
	 * Display text if value is not selected
	 */
	placeholder: PropTypes.string
};

export default DateInput;