import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';



export const PostCreate = (props) => (
    <Create  {...props}  >
        <SimpleForm >
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="to" />
        </SimpleForm>
    </Create>
);
