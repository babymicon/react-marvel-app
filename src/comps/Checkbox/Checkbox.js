import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component{
    render() {
        const {message, value, disabled } = this.props;
        return (
           <fragment>
               <input type="checkbox" defaultChecked={value} disabled={ disabled || true} />
               { message}
           </fragment>

        );
    };
};

Checkbox.propTypes = {
    message: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired
};

export default Checkbox;
