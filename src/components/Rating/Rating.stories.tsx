//import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {Rating, RatingPropsType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
} as Meta;

const Template: Story<RatingPropsType> = (args) =><Rating {...args}/>

export const EmptyRating = Template.bind({})
EmptyRating.args = {
    value:0,
    onClick: x=>x
}
// export const RatingChanging = Template.bind({})
// // const [rating, setRating] = useState<RatingValueType>(0)
// RatingChanging.args = {
//     value:rating,
//     onClick: setRating
// }



