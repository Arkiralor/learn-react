import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
    
    return (
        <button onClick={onClick} style={{backgroundColor:color}} className="btn">
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "Add",
    color: "#1f1f1f"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button