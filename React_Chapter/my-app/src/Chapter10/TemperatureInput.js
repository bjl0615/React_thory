import React from 'react';
import { render } from 'react-dom';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
    }

    handleChange = (event) => {
        this.props.onTemperaturChange(event.target.value);
    }

    render() {
        const { scale, temperature } = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input 
                    value={temperature}
                    onChange = {this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput;