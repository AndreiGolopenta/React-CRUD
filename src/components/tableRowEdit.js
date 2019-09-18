import React, { Component } from 'react';

import { Button, Form } from 'react-bootstrap';

class TableRowEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.user.name,
      lastName: props.user.lastName,
      id: props.user.id,
      edited: props.user.edited,
      search: props.user.search,
    };
  }

  changeNameInput = event => {
    this.setState({ name: event.target.value });
  };

  changeLastNameInput = event => {
    this.setState({ lastName: event.target.value });
  };

  render() {
    const { user, updateUser } = this.props;

    return (
      <tr>
        <td>{user.id}</td>
        <td>
          {user.name === '' ? (
            <Form.Control
              size="sm"
              type="text"
              name="name"
              placeholder="Please insert your First Name"
              onChange={this.changeNameInput}
            />
          ) : (
            <Form.Control
              size="sm"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="First Name"
              onChange={this.changeNameInput}
            />
          )}
        </td>
        <td>
          {user.lastName === '' ? (
            <Form.Control
              size="sm"
              type="text"
              name="lastName"
              placeholder="Please insert your Last Name"
              onChange={this.changeLastNameInput}
            />
          ) : (
            <Form.Control
              size="sm"
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.changeLastNameInput}
            />
          )}
        </td>
        <td>
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => updateUser(this.state, true)}
          >
            Done
          </Button>
        </td>
      </tr>
    );
  }
}

export default TableRowEdit;
