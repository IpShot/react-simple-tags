import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SimpleTags from '../index';
import { Container } from './utils';

storiesOf('SimpleTags', module)
  .add('default', () => (
    <Container>
      <SimpleTags onClick={ action('button clicked') }>Hello</SimpleTags>
    </Container>
  ));
