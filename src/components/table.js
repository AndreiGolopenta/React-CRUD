import React, { Component } from 'react';

import { Table, Button } from 'react-bootstrap';

import TableRow from './tableRow';

import TableRowEdit from './tableRowEdit';

class UsersTable extends Component {
  render() {
    const { users, updateUser, openDeleteModal, restoreDatabase } = this.props;
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            user.edited ? (
              user.search ? (
                <TableRowEdit
                  key={user.id}
                  user={user}
                  updateUser={updateUser}
                />
              ) : null
            ) : user.search ? (
              <TableRow
                key={user.id}
                user={user}
                updateUser={updateUser}
                openDeleteModal={openDeleteModal}
              />
            ) : null
          )}
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={restoreDatabase}>
                  Restore database
                </Button>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    );
  }
}

export default UsersTable;
