/*
    Shared State
        State에 있는 데이터를 여러개의 하위 컴포넌트에서 공톡적으로 사용하는 경우
        
        Temperature Calculator(온도를 변화해주는 Component)
            섭씨의 온다 값에 따라서 물이 끓는지 여부를 리턴하는 컴포넌트
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
            
            화씨 옵도값 입력 기능 추가
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
            여기서 문제가 하나 발생하는데 각각 받는 값이 다르면 결과가 다르게 나타날 수 있다 
            그래서 두 값을 동기화를 시켜주어야 한다.

            온도 변화 함수 작성
                function toCelsius(faherenheit) {
                    return (fahrenheit - 32 ) * 5 / 9;
                }

                function toFahrenheit(celsius) {
                    return (celsius * 9 / 5) + 32;
                }

            온도 변환 함수를 호출하는 함수 작성
                function tryConvert(temperature, convert) {
                    const input = paresFloat(temperature);
                    if(Number.inNaN(input)) {
                        return '';
                    }
                    const output = convert(input);
                    const rounded = Math.round(output * 1000) / 1000'
                    return rounded.toString();
                }

            하위 컴포넌트의 state를 공통 상위 컴포넌트로 올림!
            TemperatureInput 컴포넌트 변경
            state가 아닌 props에서 온도 값을 가져오도록 변경
                render(){
                    //Before : const temperature = this.state.temperature;
                    const temperature = this.props.temperature;
                }
                
            온도값이 변경되면 props.onTemperatureChange 함수 호출
                handleChange(e) {
                    // Before: this.setState({temperature: e.target.value});
                    this.props.onTemperatureChange(e.target.value);
                }

            Calculator 컴포넌트 변경
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