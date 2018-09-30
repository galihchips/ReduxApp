import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Right } from 'native-base';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { removeContact } from '../actions/actCounter';

class RemoveContact extends Component {  

  constructor(props) {
    super(props);  
    this.state = {
      nama : this.props.contact.nama,
      notelp : this.props.contact.notelp,
    };
  }
  handleRemove = () => {
    this.props.dispatch(removeContact(this.state))
    this.props.navigation.navigate('ListContact')
  }
  render() {
    
    return (
      <Container>
        <Header>
          <Right>
            <Button 
            style ={{}}
            onPress = {() => this.handleRemove(this.state)}
            >
              <Text>Delete</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
          <Item>
              <Input placeholder="Nama"
              onChangeText = {(text) => this.setState({nama})} />
            </Item>
            <Item last>
              <Input placeholder="No Telp"
              onChangeText = {(text) => this.setState({notelp})} />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contact: state.contact.dataContact
  }
};
export default connect(mapStateToProps)(RemoveContact);