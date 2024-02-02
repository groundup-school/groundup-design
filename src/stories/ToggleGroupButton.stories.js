import ToggleGroupButton from '../components/ToggleGroupButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Toggle/ToggleGroupButton',
  component: ToggleGroupButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    options: [
	    {
	    	value: "js",
	    	label: "JS"
	    },
	    {
	    	value: "css",
	    	label: "CSS"
	    },
	    {
	    	value: "html",
	    	label: "HTML"
	    },
    ],
    selected: ["js"],
    style: { width: 200 }
  },
};
