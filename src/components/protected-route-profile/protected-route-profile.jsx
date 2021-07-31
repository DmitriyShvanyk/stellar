import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const ProtectedRouteProfile = ({ children, ...rest }) => {
    const { isLoggined } = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggined ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            }
        />
    );
};