import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class AlertMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <Alert 
        variant={message.messageType}>
        {message.messageContain}
      </Alert>);
  }
}

export default AlertMessage;
