import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {Content,List,ListItem,Text,Thumbnail, Left, Body, Right,Container,Header, Button} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class ListContact extends Component<Props> {
  constructor() {
    super();
  }
  
  render() {   
    return (
      <Container>
      <Content>
        <List>
          {this.props.contact.map((data, key) => (
                <ListItem thumbnail key={key}
                onPress = {() => this.props.navigation.push('RemoveContact')}
                >
                  <Left>
                    <Thumbnail square source={{ uri: data.imageURI }} />
                  </Left>
                  <Body>
                    <Text>{data.nama}</Text>
                    <Text note >{data.notelp}</Text>
                  </Body>
                  <Right />
                </ListItem>
            ))}
        </List>
        <Button onPress = {() => this.props.navigation.push('AddContact')} style ={{alignSelf :'center', marginTop : 10}}>
              <Text>Add Contact</Text>
      </Button>
      </Content>

      
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact.dataContact
  }
}

export default connect(mapStateToProps)(ListContact)

