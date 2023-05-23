import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  
} from 'react-admin';


const PostEdit = (props) => (
  <Edit {...props} title='Edit of Rentals'>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput  source='title' />
      <TextInput  source='body' />
      <DateTimeInput source='date_created' />

    
    
    </SimpleForm>
  </Edit>
);

export default PostEdit;