import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit = (props) => (
    <Edit {...props} title="Edit Data Honda">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="to" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
