import React from "react";
import CheckGroup from "../components/CheckGroup";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Components/MultiSelect/CheckGroup",
	component: CheckGroup,
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
		options: [
			{ value: 11, label: "Java" },
			{ value: 12, label: "NodeJS" },
			{ value: 13, label: "Golang" },
			{ value: 14, label: "PHP" },
		],
		selected: [13],
		coverStyle: { width: 200 },
	},
};