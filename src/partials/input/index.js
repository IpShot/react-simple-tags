import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import style from './style.css';


const key = {
	enter: 13,
	backspace: 8,
};

class Input extends Component {

	handleKeyPress = ({ keyCode }) => {
		if (keyCode === key.enter) {
			this.props.onPressEnter();
		} else if (keyCode === key.backspace) {
			this.props.onPressBackspace();
		}
	}

	render() {
		const { 
			value, 
			onChange, 
			className,
			placeholder,
		} = this.props;

		return (
			<input
				name="tag"
				type="text"
				className={cn(style.input, className)}
				value={value}
				onChange={onChange}
				onKeyDown={this.handleKeyPress}
				placeholder={placeholder}
			/>
		);
	}
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  onPressBackspace: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: '',
  value: '',
  onChange: () => [], 
  onPressEnter: () => '', 
  onPressBackspace: () => '', 
};

export default Input;