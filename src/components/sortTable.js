import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap';

class SortTable extends Component {
  
  render() {
    const { sort } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" size="sm" id="dropdown-basic">
          Sort Table
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            className="menu" 
            onClick={() => sort('ascending')}>
            Ascending by id
          </Dropdown.Item>
          <Dropdown.Item 
            className="menu" 
            onClick={() => sort('descending')}>
            Descending by id
          </Dropdown.Item>
          <Dropdown.Item 
            className="menu" 
            onClick={() => sort('initial')}>
            Initial
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default SortTable;
