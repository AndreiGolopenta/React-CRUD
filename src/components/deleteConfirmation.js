import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

class DeleteConfirmation extends Component {
  render() {
    const { deleteModal, closeDeleteModal, selectedUser, deleteUser } = this.props;
    return (
      <Modal show={deleteModal.show} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete user{' '}
          <strong>
            {selectedUser.name} {selectedUser.lastName}
          </strong>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="outline-secondary" 
            size="sm" 
            onClick={closeDeleteModal}>
            Close
          </Button>
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={() => deleteUser(selectedUser)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeleteConfirmation;
