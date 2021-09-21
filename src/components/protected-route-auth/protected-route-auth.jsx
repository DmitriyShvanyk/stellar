import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProtectedRouteAuth = ({ children, ...rest }) => {
    const { isLoggined } = useSelector(state => state.user)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggined ? <Redirect to={location.state?.from?.pathname || '/'} /> : children
            }
        />
    )
}

ProtectedRouteAuth.propTypes = {
    children: PropTypes.element.isRequired
}