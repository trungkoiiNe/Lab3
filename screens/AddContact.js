import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addContact } from '../utility/api';

const AddContact = ({ navigation }) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [phone, setPhone] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = () => {
    const contact = {
      name: { first: name.split(' ')[0], last: name.split(' ')[1] || '' },
      picture: { large: avatar },
      phone,
      cell,
      email,
    };
    console.log(contact);
    const newContact = addContact(contact);
    navigation.navigate('Contacts', { newContact });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="First Last"
      />
      <Text style={styles.label}>Avatar URL:</Text>
      <TextInput
        style={styles.input}
        value={avatar}
        onChangeText={setAvatar}
        placeholder="https://example.com/avatar.jpg"
      />
      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone number"
      />
      <Text style={styles.label}>Cell:</Text>
      <TextInput
        style={styles.input}
        value={cell}
        onChangeText={setCell}
        placeholder="Cell number"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
      />
      <Button title="Add Contact" onPress={handleAddContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddContact;