import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const ProtectedRouteAuth = ({ children, ...rest }) => {
    const { isLoggined } = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggined ? <Redirect to={location.state?.from?.pathname || '/'} /> : children
            }
        />
    );
};