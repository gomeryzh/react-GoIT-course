import React from 'react';
import withAuth from '../components/HOC/WithAuth';

const Profile = () => <h1>Protected Profile Page</h1>;

export default withAuth(Profile);
