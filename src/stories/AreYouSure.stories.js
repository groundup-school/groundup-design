import React from "react";
import LightButton from "../components/LightButton";
import AreYouSure from "../components/AreYouSure.jsx";

const Demo = () => {
	const areYouSureRef = React.useRef();
	return (
		<>
			<LightButton
				onPress={() => {
					areYouSureRef.current.open("Did you really wanted a demo");
				}}
				text="Press Me"
				style={{ width: 100 }}
			/>
			<AreYouSure
				ref={areYouSureRef}
				onYes={() => alert("Yes")}
				onNo={() => alert("No")}
			/>
		</>
	);
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Components/Dailogs/AreYouSure",
	component: Demo,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
	args: {
		width: 200,
	},
};