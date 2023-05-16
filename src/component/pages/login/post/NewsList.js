import React from 'react';
import { List, Datagrid, TextField, DateField, Filter, SearchInput } from 'react-admin';

const NewsFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="Rental ID" source="id" resettable alwaysOn />
    </Filter>
);

const NewsList = (props) => (
    <List {...props} filters={<NewsFilter />} title="List of Rentals">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <DateField source="date_created" />
        </Datagrid>
    </List>
);

export default NewsList;
