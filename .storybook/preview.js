import {addDecorator} from '@storybook/react';
import {addParameters} from '@storybook/client-api';
import {withA11y} from '@storybook/addon-a11y';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(withA11y);
