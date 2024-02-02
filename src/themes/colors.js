const colors = {
	bgColor: process.env.REACT_APP_BG_COLOR || "#ffffff",
	bgDarkColor: process.env.REACT_APP_BG_DARK_COLOR || "#ffffff",

	border: process.env.REACT_APP_BORDER_COLOR || "#EBEBEB",
	
	text: process.env.REACT_APP_TEXT_COLOR || "#000000",
	textLight: process.env.REACT_APP_TEXT_LIGHT_COLOR || "#8D92A3",
	textLight2: process.env.REACT_APP_TEXT_LIGHT2_COLOR || "#616B7D",

	placeholder: process.env.REACT_APP_PLACEHOLDER_COLOR || "#BBBBBB",

	primary: process.env.REACT_APP_PRIMARY_COLOR || "#5146EE",
	primaryLight: process.env.REACT_APP_PRIMARY_LIGHT_COLOR || "#EBEAFD",
	safeGreen: process.env.REACT_APP_SAFE_GREEN_COLOR || "#009855",

	bgTrans: process.env.REACT_APP_BG_TRANS_COLOR || "#000000C4",
	transparent: "#00000000"
}

export default colors;