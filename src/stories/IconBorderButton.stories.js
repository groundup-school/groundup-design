import React from "react";
import IconBorderButton from '../components/IconBorderButton';
import GoogleIcon from './assets/google.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Buttons/IconBorderButton',
  component: IconBorderButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
  	renderIcon: () => <img src={GoogleIcon} style={{ width: 17, height: 17 }} />,
    text: "Continue with Google",
    style: { width: 250 }
  },
};
