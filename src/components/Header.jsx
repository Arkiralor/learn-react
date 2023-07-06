import PropTypes from 'prop-types'

import Button from "./Button";


const Header = ({title}) => {
    const onClick = (e) => {
        console.log("Click")
    } 
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" color="#1f1f1f" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//// CSS in JSX
// const HeaderStyle = {
//     color:'#ed3e3e', 
//     backgroundColor: '#dbdbdb'
// }

export default Header