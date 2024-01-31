import { Dimensions } from "react-native-web";

//Dimension Constants
const { width, height } = Dimensions.get("window");

export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT = height;
export const WINDOW_HALF_HEIGHT = height / 2;
export const WINDOW_HALF_WIDTH = width / 2;

export const W05 = WINDOW_WIDTH * 0.05;
export const W10 = WINDOW_WIDTH * 0.1;
export const W22 = WINDOW_WIDTH * 0.22;
export const W24 = WINDOW_WIDTH * 0.24;
export const W27 = WINDOW_WIDTH * 0.27;

export const W30 = WINDOW_WIDTH * 0.3;
export const W35 = WINDOW_WIDTH * 0.35;

export const W40 = WINDOW_WIDTH * 0.4;
export const W45 = WINDOW_WIDTH * 0.45;

export const W50 = WINDOW_WIDTH * 0.5;
export const W55 = WINDOW_WIDTH * 0.55;

export const W60 = WINDOW_WIDTH * 0.6;
export const W65 = WINDOW_WIDTH * 0.65;
export const W66 = WINDOW_WIDTH * 0.66;

export const W70 = WINDOW_WIDTH * 0.7;
export const W75 = WINDOW_WIDTH * 0.75;

export const W80 = WINDOW_WIDTH * 0.8;
export const W85 = WINDOW_WIDTH * 0.85;

export const W90 = WINDOW_WIDTH * 0.9;
export const W95 = WINDOW_WIDTH * 0.95;

export const SIDEBAR_FULL_WIDTH = 250;
export const SIDEBAR_SMALL_WIDTH = 60;
export const NAV_HEADER_HEIGHT = 50;
export const CONTENT_HEIGHT = WINDOW_HEIGHT - NAV_HEADER_HEIGHT;
export const INPUT_HEIGHT = 40;
export const BORDER_RADIUS = 5;

//Text Constants
export const ERROR_TEXT = "Please try again!";
export const RELOAD_TEXT = "Please refresh page";
export const MMMMDDYYYY = "MMMM DD, YYYY";
export const DD = "DD";
export const DDMMYYYY = "DD MM YYYY";
export const YYYYMMDD = "YYYY-MM-DD";
