
import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {

 
    return (
      
        
        <header>

            <h2>{title}</h2>
            <Button color={showAdd? 'red': 'green'} text={showAdd? 'close window':'create task'} onClick={onAdd}/>

        </header>

    )
}

Header.defaultProps = {
    title: "Line UP Uganda",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
