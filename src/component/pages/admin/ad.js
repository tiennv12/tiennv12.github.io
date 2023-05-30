import * as React from 'react';
import Dashboard from './Dashboard';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataprovider/dataProvider';
import { i18nProvider } from './i18nProvider';
import UseToken from './Token';
import { authProvider } from './authProvider';
import Login from '../login/login';

import PostEdit from './postEdit';
import { PostCreate } from './postCreate';
import PostList from './postList';

export const httpClient = () => {
    const { token } = JSON.parse(localStorage.getItem('auth')) || {};
    return { Authorization: `Bearer ${token}` };
};

function Ad() {
    const { token, setToken } = UseToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Admin
            dataProvider={dataProvider('https://test-api.lthoang.com', httpClient)}
            i18nProvider={i18nProvider}
            dashBoard={Dashboard}
            authProvider={authProvider}
        >
            <Resource name="hondas" list={PostList} edit={PostEdit} create={PostCreate} />
        </Admin>
    );
}
export default Ad;
