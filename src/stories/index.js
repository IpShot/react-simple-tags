import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SimpleTags from '../index';
import { Container } from './utils';


storiesOf('SimpleTags', module)
  .add('default', () => {
    let tags = ['1', '2', '3'];
    return (
      <Container>
        <SimpleTags 
          tags={tags}
          onChange={(t) => { tags = t }}
        />
      </Container>
    );
  });
