import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

class TableRow extends Component {
  render() {
    const { user, updateUser, openDeleteModal } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>
          <Button
            className="edit-button"
            variant="outline-primary"
            size="sm"
            onClick={() => updateUser(user, false)}>
            Edit
          </Button>
          <Button
            className="delete-button"
            variant="outline-danger"
            size="sm"
            onClick={() => openDeleteModal(user)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
