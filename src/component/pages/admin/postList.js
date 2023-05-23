import React from 'react';
import { List, Datagrid, TextField, DateField, Filter, SearchInput } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="title" source="title" resettable alwaysOn />
    </Filter>
);

export const PostList =  (props) => (
    <List {...props} filters={<PostFilter />} title="List of Rentals">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <DateField source="date_created" />
        </Datagrid>
    </List>
);