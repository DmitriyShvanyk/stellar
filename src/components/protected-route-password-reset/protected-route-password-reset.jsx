import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProtectedRoutePasswordReset = ({ children, ...rest }) => {
    const { isLoggined } = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggined || location.state?.from !== '/forgot-password' ? <Redirect to="/" /> : children
            }
        />
    )
}

ProtectedRoutePasswordReset.propTypes = {
    children: PropTypes.element.isRequired
}