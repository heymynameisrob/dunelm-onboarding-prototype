import React, { Component } from 'react';
import MultipleChoiceOptionImage from './MultipleChoiceOptionImage.js';
import MultipleChoiceOption from './MultipleChoiceOption.js';
import Button from '../components/Button';

class MultipleChoice extends Component {
  constructor() {
    super();
    this.state = {
      nextQuestion: 0,
      selectedOptions: [],
      maxOptions: 5
    }
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const data = this.props.questions;
    this.setState({
      nextQuestion: data.id + 1,
      selectedOptions: []
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.questions.id !== prevProps.questions.id) {
      this.setState({
        selectedOptions: []
      })
    }
  }
  toggle(id) {
    const selectedOptions = this.state.selectedOptions;

    if (selectedOptions.includes(id)) {

      var array = [...this.state.selectedOptions]; // make a separate copy of the array
      var index = array.indexOf(id)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ selectedOptions: array });
      }

    } else {

      if (selectedOptions.length == this.props.questions.maxAnswers) {
        return false
      }

      this.setState({
        selectedOptions: [...this.state.selectedOptions, id]
      }, () => { console.log(this.state.selectedOptions) });

    }
  }
  render() {
    const dataOptions = this.props.questions.answers;
    const remainingCount = this.props.questions.minAnswers - this.state.selectedOptions.length;
    return (
      <div>
        <p className="select-text">{this.props.questions.helper}</p>
        <ul className="multi-choice">
          {dataOptions.map(options => {
            if (this.props.type == 'text') {
              return (
                <MultipleChoiceOption
                  id={options.id}
                  selected={this.state.selectedOptions.includes(options.id) ? true : false}
                  toggleSelect={this.toggle.bind(this, options.id)}
                  label={options.label}
                />
              )
            } else {
              return (
                <MultipleChoiceOptionImage
                  id={options.id}
                  image={options.img}
                  label={options.label}
                  selected={this.state.selectedOptions.includes(options.id) ? true : false}
                  toggleSelect={this.toggle.bind(this, options.id)}
                />
              )
            }

          })}
        </ul>
      </div>
    );
  }
}

export default MultipleChoice;