import React from 'react';
import uniqueId from '../../util/uniq_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.body = "";
    this.submitForm = this.submitForm.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.title = e.currentTarget.value;
  }

  updateBody(e) {
    this.body = e.currentTarget.value;
  }

  submitForm(e) {
    e.preventDefault();
    this.props.receiveTodo({
      id: uniqueId(),
      title: this.title,
      body: this.body,
      done: false
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="title">Title:</label>
        <input onChange={this.updateTitle} type="text" id="title"></input>
        <br></br>
        <label htmlFor="body">Body:</label>
        <textarea onChange={this.updateBody} id="body"></textarea>
        <br></br>
        <button>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
