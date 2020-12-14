//@ts-check
import React from 'react';

import ContactChooser from '../components/ContactChooser';
import GroupInfo from '../components/GroupInfo';

export default class CreateGroupScreen extends React.Component {
  state = {
    /** @type import('qiscus-sdk-javascript/typings/model').IQUser[] */
    selectedContacts: [],
    page: 'contact',
  };

  render() {
    const {page, selectedContacts} = this.state;
    if (page === 'contact')
      return (
        <ContactChooser
          navigation={this.props.navigation}
          onBack={this._onBack}
          onSubmit={this._onSelect}
        />
      );
    return (
      <GroupInfo
        contacts={selectedContacts}
        navigation={this.props.navigation}
        onBack={() => this.setState({page: 'contact'})}
      />
    );
  }

  _onBack = () => {
    this.props.navigation.goBack();
  };
  _onSelect = (contacts) => {
    this.setState({
      selectedContacts: contacts,
      page: 'info',
    });
  };
}
