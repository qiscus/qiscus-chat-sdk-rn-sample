import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback
} from "react-native";
import css from "css-to-rn.macro";
import xs from "xstream";
import debounce from "lodash.debounce";

import * as Qiscus from "qiscus";
import Toolbar from "components/Toolbar";
import ContactItem from "components/ContactItem";
import SelectedContactItem from "components/SelectedContactItem";
import LoadMore from "components/LoadMore";

export default class ContactChooser extends React.Component {
  state = {
    contacts: {},
    selected: []
  };

  componentDidMount() {
    Qiscus.isLogin$()
      .take(1)
      .map(() => xs.from(this.loadContacts()))
      .flatten()
      .map(users => users.map(user => ({ ...user, selected: false })))
      .subscribe({
        next: users => {
          const contacts = users.reduce((res, it) => {
            res[it.id] = it;
            return res;
          }, {});
          this.setState({
            contacts
          });
        }
      });
  }

  render() {
    const { contacts, selectedContacts } = this;

    return (
      <View style={styles.container}>
        <Toolbar
          title="Choose Contacts"
          renderLeftButton={() => (
            <TouchableOpacity style={styles.toolbarBtn} onPress={this._onBack}>
              <Image
                style={styles.icon}
                source={require("assets/ic_back.png")}
              />
            </TouchableOpacity>
          )}
          renderRightButton={() => (
            <TouchableOpacity
              style={styles.toolbarBtn}
              onPress={this._onSubmit}
            >
              <Image
                style={styles.icon}
                source={require("assets/ic_next.png")}
              />
            </TouchableOpacity>
          )}
        />

        <View style={styles.searchContainer}>
          <Image
            style={styles.iconSearch}
            source={require("assets/ic_magnifier.png")}
          />
          <TextInput
            style={styles.inputSearch}
            placeholder="Search"
            onChangeText={this._onSearch}
          />
        </View>

        {selectedContacts.length > 0 && (
          <FlatList
            style={styles.selectedContacts}
            horizontal={true}
            data={selectedContacts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <SelectedContactItem
                contact={item}
                onRemove={() => this._removeContact(item)}
              />
            )}
          />
        )}

        <View style={styles.contactList}>
          <View style={styles.separator}>
            <Text style={styles.separatorText}>Contacts</Text>
          </View>
          <FlatList
            style={styles.contactFlatList}
            initialNumToRender={20}
            data={contacts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => this._contactItem(item)}
          />
        </View>
      </View>
    );
  }

  loadContacts = (query = "", page = 1) => {
    const perPage = 200;
    return Qiscus.qiscus
      .getUsers(query, page, perPage)
      .then(resp => resp.users);
  };

  _onSearch = debounce(text => {
    console.log("on:search", text);
    this.loadContacts(text).then(users =>
      this.setState({
        contacts: users
      })
    );
  });
  _onBack = () => this.props.onBack();
  _removeContact = contact => {
    this.setState(state => ({
      selected: state.selected.filter(it => it.id !== contact.id)
    }));
  };
  _addContact = contact => {
    this.setState(state => ({
      selected: [...state.selected, contact]
    }));
  };
  _onSelectContact = contact => {
    const selected = this.state.selected;
    const _contact = selected.find(it => it.id === contact.id);
    if (_contact == null) this._addContact(contact);
    else this._removeContact(contact);
  };

  _contactItem(item) {
    if (item.type && item.type === "load-more") {
      return <LoadMore onPress={() => this.loadContacts(null, 1)} />;
    }
    return (
      <ContactItem
        contact={item}
        onSelect={() => this._onSelectContact(item)}
        renderButton={() =>
          item.selected && (
            <TouchableWithoutFeedback onPress={() => this._removeContact(item)}>
              <Image
                style={[styles.icon, styles.selected]}
                source={require("assets/ic_selected.png")}
              />
            </TouchableWithoutFeedback>
          )
        }
      />
    );
  }

  _onSubmit = () => {
    this.props.onSubmit(this.selectedContacts);
  };

  get isLoadAble() {
    return false;
  }

  get contacts() {
    const contacts = Object.values(this.state.contacts).map(item => ({
      ...item,
      selected: this.state.selected.findIndex(it => it.id === item.id) >= 0
    }));
    if (this.isLoadAble) {
      contacts.push({ type: "load-more", text: "Load more" });
    }
    return contacts;
  }

  get selectedContacts() {
    return this.state.selected;
  }
}

const styles = StyleSheet.create(css`
  .container {
    display: flex;
    height: 100%;
  }
  .toolbarBtn {
    height: 30px;
    width: 30px;
    overflow: hidden;
    background-color: transparent;
    flex: 0;
    flex-shrink: 0;
    flex-basis: 30px;
    border-radius: 50px;
  }
  .icon {
    height: 30px;
    width: 30px;
    resize-mode: contain;
  }
  .inputSearch {
    color: #979797;
  }
  .searchContainer {
    display: flex;
    flex-direction: row;
    flex-basis: 45px;
    background-color: white;
    border-bottom-width: 1px;
    border-bottom-color: #e8e8e8;
    justify-content: center;
    align-items: center;
  }
  .separator {
    flex: 0;
    flex-direction: column;
    flex-basis: 45px;
    height: 45px;
    padding-left: 10px;
    background-color: #fafafa;
    justify-content: flex-end;
    display: flex;
  }
  .separatorText {
    color: #666;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
  }
  .selectedContacts {
    flex: 0;
    flex-shrink: 0;
    flex-basis: 70px;
    margin-top: 10px;
  }
  .contactList {
    flex: 1;
    flex-basis: auto;
    display: flex;
  }
  .contactFlatList {
    flex: 1;
    flex-basis: auto;
    height: 100%;
  }
  .selected {
    height: 25px;
    width: 25px;
    border-radius: 50px;
    overflow: hidden;
    resize-mode: contain;
    margin-right: 10px;
  }
`);
