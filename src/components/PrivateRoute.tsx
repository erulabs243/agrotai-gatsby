import { isLoggedIn } from '@services/auth';
import { navigate } from 'gatsby';
import React, { Children } from 'react';

type Props =  React.PropsWithChildren<{
    location: string;
}>;

const PrivateRoute = ({location, children}: Props) => {

    if(!isLoggedIn() && location !== '/auth/login'){
        navigate('/auth/login');
        return null;
    }

  return <>{children}</>
};

export default PrivateRoute;