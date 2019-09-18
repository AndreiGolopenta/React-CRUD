import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap';

class DropdownButton extends Component {
  render() {
    const { insertUser } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" size="sm" id="dropdown-basic">
          Insert new user
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item 
            className="menu"
            onClick={() => insertUser('Top')}>
            Top
          </Dropdown.Item>
          <Dropdown.Item 
            className="menu"
            onClick={() => insertUser('Bottom')}>
            Bottom
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownButton;