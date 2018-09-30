import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Right } from 'native-base';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { createContact } from '../actions/actCounter';

class AddContact extends Component {  

  constructor(props) {
    super(props);  
    this.state = {
      nama : '',
      notelp : '',
      imageURI : ''
    };
  }
  handleSave = () => {
    this.props.dispatch(createContact(this.state))
    this.props.navigation.navigate('ListContact')
  }
  render() {
    
    return (
      <Container>
        <Header>
          <Right>
            <Button 
            style ={{}}
            onPress = {() => this.handleSave(this.state)}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
          <Item>
              <Input placeholder="Nama"
              onChangeText = {(text) => this.setState({nama : text})} />
            </Item>
            <Item last>
              <Input placeholder="No Telp"
              onChangeText = {(text) => this.setState({notelp : text})} />
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
export default connect(mapStateToProps)(AddContact);