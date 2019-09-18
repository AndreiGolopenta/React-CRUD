import React, { Component } from 'react';
import './App.css';

import UsersTable from './components/table';
import DropdownButton from './components/dropdownButton';
import SortTable from './components/sortTable';
import AlertMessage from './components/alertMessage';
import Search from './components/search';
import DeleteConfirmation from './components/deleteConfirmation';

import { Card } from 'react-bootstrap';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Mihai',
        lastName: 'Ionescu',
        edited: false,
        search: true,
      },
      {
        id: 2,
        name: 'Florin',
        lastName: 'Popescu',
        edited: false,
        search: true,
      },
      {
        id: 3,
        name: 'Daniel',
        lastName: 'Georgescu',
        edited: false,
        search: true,
      },
    ],
    message: { messageType: '', active: false, messageContain: '' },
    deleteModal: { show: false },
    selectedUser: {
      id: null,
      name: '',
      lastName: '',
      edited: false,
      search: true,
    },
  };

  updateUser = (user, onOff) => {
    const { users } = this.state;
    user.edited = !user.edited;
    let update = users.map(data => {
      return data.id === user.id
        ? Object.assign(data, user)
        : Object.assign({}, data);
    });
    this.setState({ users: update });
    if (onOff) {
      const msg = `Updated user successfully`;
      this.setState({
        message: { messageType: 'success', active: true, messageContain: msg },
      });
      setTimeout(() => this.closeMessage(), 2500);
      this.cloneState = this.state.users;
    }
  };

  openDeleteModal = user => {
    this.setState({ deleteModal: { show: true } });
    this.setState({ selectedUser: user});
  };

  closeDeleteModal = () => {
    this.setState({ deleteModal: { show: false } });
  };

  deleteUser = user => {
    const { users } = this.state;
    this.setState({
      users: users.filter(data => {
        return user.id !== data.id;
      }),
    });
    const msg = `User ${user.name} ${user.lastName} was deleted`;
    this.setState({
      message: { messageType: 'danger', active: true, messageContain: msg },
    });
    this.closeDeleteModal();
    setTimeout(() => this.closeMessage(), 2500);
  };

  closeMessage() {
    this.setState({ message: { messageType: '', active: false } });
  }

  insertUser = value => {
    const { users } = this.state;
    const id = [];
    users.map(user => {
      return id.push(user.id);
    });
    const newUser = {
      id: Math.max(...id) + 1,
      name: '',
      lastName: '',
      edited: true,
      search: true,
    };
    value === 'Top'
      ? this.setState({ users: [newUser, ...users] })
      : this.setState({ users: [...users, newUser] });
    const msg = 'New entry in table was added';
    this.setState({
      message: { messageType: 'dark', active: true, messageContain: msg },
    });
    setTimeout(() => this.closeMessage(), 2500);
  };

  componentDidMount() {
    this.cloneState = this.state.users;
    this.cloneStateInitial = this.state.users;
  }

  cloneStateInitial = [];
  cloneState = [];

  sort = orderValue => {
    const { users } = this.state;
    const sortId = [];
    const sortedState = [];
    users.map(user => {
      return sortId.push(user.id);
    });
    sortId.sort((a, b) => a - b);
    sortId.map(id => {
      return users.map(user => {
        return user.id === id ? sortedState.push(user) : null;
      });
    });
    if (orderValue === 'ascending') {
      this.setState({ users: sortedState });
    } else if (orderValue === 'descending') {
      this.setState({ users: sortedState.reverse() });
    } else {
      this.setState({ users: this.cloneState });
    }
  };

  search = event => {
    const searchValue = event.target.value;
    this.setState({
      users: this.state.users.map(user => {
        if (
          user.name.toLowerCase().indexOf(searchValue) !== -1 ||
          user.lastName.toLowerCase().indexOf(searchValue) !== -1
        ) {
          user.search = true;
          return user;
        } else {
          user.search = false;
          return user;
        }
      }),
    });
  };

  restoreDatabase = () => {
    this.setState({users: this.cloneStateInitial});
  }

  render() {
    const { users, message, deleteModal, selectedUser } = this.state;
    return (
      <div className="myApp">
        <Card>
          <Card.Body className="top-card">
            <h4>Users : {users.length}</h4>
            <div className="sort-insert-search">
              <Search search={this.search} />
              <SortTable className="sort" sort={this.sort} />
              <DropdownButton insertUser={this.insertUser} />
            </div>
          </Card.Body>
        </Card>
        <UsersTable
          users={users}
          updateUser={this.updateUser}
          openDeleteModal={this.openDeleteModal}
          restoreDatabase={this.restoreDatabase}
        />
        {message.active ? <AlertMessage message={message} /> : null}
        <DeleteConfirmation
          deleteModal={deleteModal}
          selectedUser={selectedUser}
          deleteUser={this.deleteUser}
          closeDeleteModal={this.closeDeleteModal}
        />
      </div>
    );
  }
}

export default App;
