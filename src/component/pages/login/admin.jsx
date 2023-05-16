import React from 'react';
import lb4Provider from 'react-admin-lb4';
import Login from './login';
import { Admin, Resource } from 'react-admin';
import NewsList from './post/NewsList';


function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
}

function admin() {
    const token = getToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        
            <Admin dataProvider={lb4Provider('http://localhost:8000')}>
                <Resource name="news" list={NewsList} />
            </Admin>
       
    );
}

export default admin;
