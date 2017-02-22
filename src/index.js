import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import style from './style.css';
import Tag from './partials/tag';


class SimpleTags extends Component {

  handleAddTag = (tag) => {
    const { tags, onChange } = this.props;
    const newTags = tags.slice().push(tag);
    onChange(newTags);
  }

  handleRemoveTag = (tag) => {
    const { tags, onChange } = this.props;
    const newTags = tags.slice();
    newTags.splice(tags.indexOf(tag), 1);
    onChange(newTags);
  }

  render() {
    const {
      tags,
      className,
    } = this.props;

    return (
      <div className={cn(style.box, className.box)}>
        {tags.map((tag, idx) => (
          <Tag 
            key={idx}
            className={className.tag}
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
  className: PropTypes.object,
  onChange: PropTypes.func,
};

SimpleTags.defaultProps = {
  tags: [],
  className: {},
  onChange: () => [], 
};

export default SimpleTags;
