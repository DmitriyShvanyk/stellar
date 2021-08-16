import PropTypes from 'prop-types'
import styles from './title.module.css'

export const Title = ({ text }) => {
    return (
        <h1 className={`${styles.title} text text_type_main-large mt-5 mb-5`}>
            {text}
        </h1>
    )
}

Title.propTypes = {
    text: PropTypes.string
}