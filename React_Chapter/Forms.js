/*
    Forms(���)
        ����ڷκ��� �Է��� �ޱ� ���� ���
                HTML from
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        Controlled Components(React���� �޴� ������ �޴� input form Components)
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
        
        ������� �Է��� ���������� ������ �� ����!
                ��� �Է°��� �빮�ڷ� ����
            handleChange(event) {
                this.setState({ value:
                event.target.value.toUpperCase()});
            }
            input ���� ��ȭ�� ��� handleChange()���� ó���Ǳ� ������,
            ���ϴ´�� ������� �Է��� ���� �� �� �ִ�!

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
        �������� �ɼ��� ���� �� �� ����!
            <select multiple={true} value={['B', 'C']}>

        File Input Tag
                    HTML fileinput tag
                <input type="file" />

                File Input tage�� Uncontrolled Components(�츮�� ���� ���縦 �� �� ���� �б⸸ ������ Read Only Tag�̴�.)
        
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
            �ʹݿ� input�� ���� ������ �־ �ԷºҰ� ���¿��ٰ�, 1�ʵڿ� �Է� ������ ���·� �ٲ�
                ReactDOM.render({input value="hi"}) />, mountNode );

                setTimeout(finction() {
                    ReactDOM.render(<input value={null}) />, moubtNode);
                }, 1000);



        

*/