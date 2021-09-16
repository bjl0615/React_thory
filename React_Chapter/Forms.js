/*
    Forms(양식)
        사용자로부터 입력을 받기 위해 사용
                HTML from
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        Controlled Components(React에게 받는 통제룰 받눈 input form Components)
            handlerChange(event) {
                this.setState({value: event.target.value});
            }

            handleSubmit(event) {
                alert('A name was submitted: ' +
                this.state.value);
                event.preventDefault();
            }

            render() {
                return (
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                );
            }
        
        사용자의 입력을 직접적으로 제어할 수 있음!
                모든 입력값을 대문자로 변경
            handleChange(event) {
                this.setState({ value:
                event.target.value.toUpperCase()});
            }
            input 값의 변화가 모두 handleChange()에서 처리되기 때문에,
            원하는대로 사용자의 입력을 제어 할 수 있다!

        Textarea Tag
                HTML textarea tag
            <textarea>
                Hello there, this is some text in a text area
            </textarea>

            handleChange(event){
                this.setState({value: event.target.value});
            }
                React
            handleSubmit(event) {
                alert('An essay was submitted: ' + 
                this.state.value);
                event.preventDefault();
            }

            render() {
                return (
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Essay:
                            <textarea value={this.state.value} onChange=
                            {this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                );
            }

        Select Tag
                HTML select tag
            <select>
                <option value="grapefruit">Grapfruit</option>
                <option value="lime">Lime</option>
                <option slected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
                React
            render() {
                return (
                    <form onSubmit={this.handlSubmit}>
                        <label>
                            Pick your favorite flavor;
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                );
            }
        여러가지 옵션을 선택 할 수 있음!
            <select multiple={true} value={['B', 'C']}>

        File Input Tag
                    HTML fileinput tag
                <input type="file" />

                File Input tage는 Uncontrolled Components(우리가 값을 통재를 할 수 없고 읽기만 가능한 Read Only Tag이다.)
        
        Multiple Inputs
            render() {
                return (
                    <form>
                        <label>
                            Is going;
                            <input 
                                name="isGoing"
                                type="checnbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Number of guests:
                            <input 
                                name="numberOfGuests"
                                type="number"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange} />
                        </label>
                    </form>
                );
            }    

            handleInputChange(event) {
                const target = event.target;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;

                this.setState({
                    [name] : value
                });
            }

                ES6 code
            this.setState({
                [name] : value
            })

                ES5 code
            var paritalState = {};
            partialState[name] = value;
            this.setState(partialState);

        Input Null Value
            초반에 input의 값이 정해져 있어서 입력불가 상태였다가, 1초뒤에 입력 가능한 상태로 바뀜
                ReactDOM.render({input value="hi"}) />, mountNode );

                setTimeout(finction() {
                    ReactDOM.render(<input value={null}) />, moubtNode);
                }, 1000);



        

*/