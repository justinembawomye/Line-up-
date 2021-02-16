import Header from "./Header"
import PropTypes from 'prop-types'


export const Button = ({color, text, onClick}) => {
return <button className="btn" style={{ backgroundColor:color}} onClick={onClick}>{text}</button>
}
Button.defaultPropTypes ={
    color: 'steelBlue',
}

Button.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button;