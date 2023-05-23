import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';



export const PostCreate = (props) => (
    <Create  {...props}  >
        <SimpleForm >
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="body" />
            <DateInput label="Publication date" source="date_created" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);
