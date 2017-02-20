import React, { Component, PropTypes } from 'react';
import styles from './styles';
import Tag from './partials/tag';


class SimpleTags extends Component {

  handleAddTag(tag) {
    const { tags, onChange } = this.props;
    const newTags = tags.slice().push(tag);
    onChange(newTags);
  }

  handleRemoveTag(tag) {
    const { tags, onChange } = this.props;
    const newTags = tags.slice();
    newTags.splice(tags.indexOf(tag), 1);
    onChange(newTags);
  }

  render() {
    const {
      tags,
      boxStyle,
      tagStyle,
    } = this.props;

    return (
      <div style={{ ...styles.box, ...boxStyle }}>
        {tags.map((tag) => (
          <Tag 
            style={tagStyle}
            onClose={this.handleRemoveTag}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  }
}

SimpleTags.propTypes = {
  tags: PropTypes.array,
  onChange: PropTypes.func,
  boxStyle: PropTypes.object,
  tagStyle: PropTypes.object,
};

SimpleTags.defaultProps = {
  tags: [],
  onChange: () => [], 
  boxStyle: {},
  tagStyle: {},
};

export default SimpleTags;
