import React, {useState, useEffect} from 'react';
import {Alert, ActivityIndicator, Text, FlatList} from 'react-native';
// service
import {Account} from '../services';
import {Card} from 'react-native-paper';

const BooksList = () => {
  const [book, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Account.getBooksData()
      .then(books => setUser(books), setLoading(false))
      .catch(err => Alert.alert(err.code, err.message));
  });

  if (loading) {
    return <ActivityIndicator color={colors.primary} size="large" />;
  }

  const renderData = item => {
    return (
      <Card style={{padding: 10, margin: 10, backgroundColor: '#eddfdf'}}>
        <Text style={{fontSize: 20}}>{item.title}</Text>
        <Text style={{fontSize: 15}}>{item.author}</Text>
      </Card>
    );
  };

  return (
    <FlatList
      data={book}
      renderItem={({item}) => {
        return renderData(item);
      }}
      //keyExtractor={item => `${item.id}`}
    />
  );
};

export default BooksList;
