import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Isao} from 'react-native-textinput-effects';

export default class BookData extends Component {
  addBookData = (bookName, bookAuthor) => {
    if (!bookName || !bookAuthor) {
      Alert.alert('Error', 'Please enter all fields');
    } else {
      firestore()
        .collection('books')
        .add({
          author: bookAuthor,
          title: bookName,
        })
        .then(() => console.log('book added'));
      Alert.alert('Success', 'Books Data Added Successfully');
    }
  };

  state = {
    title: '',
    author: '',
  };

  render() {
    const {title, author} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Isao
            style={{marginBottom: 10}}
            value={title}
            label={'Title of the Book'}
            // this is applied as active border and label color
            activeColor={'#da7071'}
            // active border height
            borderHeight={5}
            inputPadding={5}
            labelHeight={24}
            // this is applied as passive border and label color
            passiveColor={'#dadada'}
            onChangeText={value => this.setState({title: value})}
          />

          <Isao
            value={author}
            label={'Name of the Author'}
            // this is applied as active border and label color
            activeColor={'#da7071'}
            // active border height
            borderHeight={5}
            inputPadding={5}
            labelHeight={24}
            // this is applied as passive border and label color
            passiveColor={'#dadada'}
            onChangeText={value => this.setState({author: value})}
          />

          <TouchableOpacity
            style={styles.addDataBtn}
            onPress={() =>
              this.addBookData(this.state.author, this.state.title)
            }>
            <Text style={styles.addDataText}>Add Book Data</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    margin: 30,
  },
  textInput: {
    height: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: '#111111',
  },
  addDataBtn: {
    width: '100%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#5ca4c4',
    color: 'FFC0CB',
    tintColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.8,
    elevation: 0,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 13},
  },
  addDataText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
