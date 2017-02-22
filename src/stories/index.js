import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SimpleTags from '../index';
import { Container } from './utils';


class Tags extends Component {
  state = {
    tags: ['Goofy', 'Fox', 'Asteroid'],
  }

  handleTagsChange = (tags) => {
    this.setState({ tags });
  }

  render() {
    return (
      <SimpleTags 
        tags={this.state.tags}
        onChange={this.handleTagsChange}
      />
    );
  }
}


storiesOf('SimpleTags', module)
  .add('default', () => (
    <Container>
      <Tags />
    </Container>
  ));
