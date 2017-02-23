import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import style from './style.css';
import Tag from './partials/tag';
import Input from './partials/input';


class SimpleTags extends Component {

  state = {
    input: '',
  }

  handleAddTag = (tag) => {
    if (tag.trim().length) {
      const { tags, onChange } = this.props;
      const newTags = tags.slice();
      newTags.push(tag);
      onChange(newTags);
    }
  }

  handleRemoveTag = (tag) => {
    const { tags, onChange } = this.props;
    const newTags = tags.slice();
    if (tag && tag.length) {
      newTags.splice(tags.indexOf(), 1);
    } else if (tags.length) {
      newTags.pop();
    }
    onChange(newTags);
  }

  handleChangeInput = ({ target: { value } }) => {
    this.setState({ input: value });
  }

  handlePressEnter = () => {
    const { input } = this.state;
    if (input && input.length) {
      this.handleAddTag(input);
      this.setState({ input: '' });
    }
  }

  handlePressBackspace = () => {
    const { input } = this.state;
    if (input.length === 0) {
      this.handleRemoveTag();
    }
  }

  render() {
    const {
      tags,
      className,
      placeholder,
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
        <Input
          className={className.input}
          value={this.state.input}
          onChange={this.handleChangeInput}
          onPressEnter={this.handlePressEnter}
          onPressBackspace={this.handlePressBackspace}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

SimpleTags.propTypes = {
  tags: PropTypes.array,
  className: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

SimpleTags.defaultProps = {
  tags: [],
  className: {},
  onChange: () => [], 
  placeholder: 'Enter tag...',
};

export default SimpleTags;
