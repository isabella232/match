import * as React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs'
import { Wombat } from '../src/Wombat';

export default {
  title: 'Components|Wombat',
  decorators: [withKnobs]
}

export const withDroppings = () => (
  <Wombat droppings={['🌯', '🍦', '🍔']} color={select('Color', ['chocolate', 'olive', 'darkgoldenrod'], 'darkgoldenrod')} />
);
