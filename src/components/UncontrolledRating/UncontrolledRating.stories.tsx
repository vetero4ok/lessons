import React from 'react';
import { Story, Meta } from '@storybook/react';
import {UncontrolledRating, RatingPropsType} from './UncontrolledRating';
import {actions} from '@storybook/addon-actions';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
} as Meta;

const Template: Story<RatingPropsType> = (args) =><UncontrolledRating {...args}/>

const callback = actions('changed')
export const ExampleRating = Template.bind({})
ExampleRating.args = {
    defaultValue : 0,
    onChange:value => callback,

}


