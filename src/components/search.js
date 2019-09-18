import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

class Search extends Component {
  render() {
    const { search } = this.props;
    return (
      <Form.Control
        size="sm"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={search}
      />
    );
  }
}

export default Search;
