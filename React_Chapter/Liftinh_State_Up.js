/*
    Shared State
        State�� �ִ� �����͸� �������� ���� ������Ʈ���� ���������� ����ϴ� ���
        
        Temperature Calculator(�µ��� ��ȭ���ִ� Component)
            ������ �´� ���� ���� ���� ������ ���θ� �����ϴ� ������Ʈ
                function BoilingVerdict(props) {
                    if (props.celsiis) >= 100 {
                        return <p>The water would boil.</p>
                    }
                    return <p> The water would not boil.</p>
                }

                class Calculator extends React.Comonent {
                    constructor(props) {
                        super(props);
                        this.handleChange = this.handleChange.bind(this);
                        this.state = {temperature: ''};
                    }

                    handleChange(e){
                        this.setState{tmperature: e.target.value};
                    }

                    render(){
                        const temperature = this.state.temperatoure;
                        return (
                            <fieldset>
                                <legend>Enter temperature Celsius:</legend>
                                <input 
                                    value={temperature}
                                    onChange={this.handleChange} />

                                <BoilingVerdict
                                    celsius = {pareseFloat(temperature)} />

                            </fieldset>
                        )
                    }
                }
            
            ȭ�� �ɵ��� �Է� ��� �߰�
                class Calculator extends React.Comonent {
                    constructor(props) {
                        super(props);
                        this.handleChange = this.handleChange.bind(this);
                        this.state = {temperature: ''};
                    }

                    handleChange(e){
                        this.setState{tmperature: e.target.value};
                    }

                    render(){
                        const temperature = this.state.temperatoure;
                        return (
                            <div>
                                <TemperatureInput scalue="c" />
                                <TemperatureInput scalue="f" />
                            </div>
                        )
                    }
                }

                const scaleNames = {
                    c: 'Celsits',
                    f: 'Fahreheit'
                };

                class TemperatureInput extends React.Component {
                    constructor(props) {
                        super(props);
                        this.handleChange = this.handleChange.bind(this);
                        this.state = {temperature: ''};
                    }

                    handleChange(e){
                        this.setState({temperature: e.target.value});
                    }

                    render() {
                        const temperature = this.state.temperature;
                        const scale = this.props.scale;
                        return (
                            <fieldset>
                                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                                <inut 
                                    value={temperature}
                                    onChange = {this.handleChange} />
                            </fieldset>
                        )
                    }
                }
            ���⼭ ������ �ϳ� �߻��ϴµ� ���� �޴� ���� �ٸ��� ����� �ٸ��� ��Ÿ�� �� �ִ� 
            �׷��� �� ���� ����ȭ�� �����־�� �Ѵ�.

            �µ� ��ȭ �Լ� �ۼ�
                function toCelsius(faherenheit) {
                    return (fahrenheit - 32 ) * 5 / 9;
                }

                function toFahrenheit(celsius) {
                    return (celsius * 9 / 5) + 32;
                }

            �µ� ��ȯ �Լ��� ȣ���ϴ� �Լ� �ۼ�
                function tryConvert(temperature, convert) {
                    const input = paresFloat(temperature);
                    if(Number.inNaN(input)) {
                        return '';
                    }
                    const output = convert(input);
                    const rounded = Math.round(output * 1000) / 1000'
                    return rounded.toString();
                }

            ���� ������Ʈ�� state�� ���� ���� ������Ʈ�� �ø�!
            TemperatureInput ������Ʈ ����
            state�� �ƴ� props���� �µ� ���� ���������� ����
                render(){
                    //Before : const temperature = this.state.temperature;
                    const temperature = this.props.temperature;
                }
                
            �µ����� ����Ǹ� props.onTemperatureChange �Լ� ȣ��
                handleChange(e) {
                    // Before: this.setState({temperature: e.target.value});
                    this.props.onTemperatureChange(e.target.value);
                }

            Calculator ������Ʈ ����
                class Calculator extends React.Comonent {
                    constructor(props) {
                        super(props);
                        this.handleChange = this.handleChange.bind(this);
                        this.state = {temperature: '', scale: 'c'};
                    }

                    handleCelsiusChange(temperature){
                        this.setState{scalue: 'c', temperature};
                    }

                    handleFahrenheitChange(temperature) {
                        this.setState({scale: 'f',temperature})
                    }

                    render() {
                        const scale = this.state.scale;
                        const temperature = this.state.temperature;
                        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
                        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

                        return (
                            <div>
                                <TemperatureInput
                                    scale="c"
                                    temperature = {celsius}
                                    onTemperatureChange = {this.handleCelsiusChange} />

                                <TemperatureInput
                                    scale="f"
                                    temperature={fahrenheit}
                                    onTemperatureChange={this.handleFahrenheitChange} />

                                <BoilingVerdict
                                    celsius={paresFloat(celsius)} />
                            </div>
                        );
                    }
                


*/