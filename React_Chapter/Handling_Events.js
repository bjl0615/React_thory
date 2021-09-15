/*
    Event
        Ư�� ����� �ǹ�
        ��ư Ŭ�� �̺�Ʈ(����ڰ� ��ư�� Ŭ���� ���)
            <button ocClikc={activateLasers}>
                Active Lasers
            </button>
         DOM���� �̺�Ʈ�� �ְ�,
         React���� �̺�Ʈ�� �ִ�.
                HTML
            <button onclick="activateLasers()">
                Active Lasers
            </button>

                React
            <button onClick={activateLasers}>
                Activate Lasers
            </button>
    
    Event Handler
        �̺�Ʈ�� ó���ϴ� �Լ�
        � ����� �߻��ϸ�, ����� ó���ϴ� ����
        Event Listener��� �θ�

        Event Handler�� ��� �߰��ұ�?
            class Toggle extends React.Componet {
                constructor(props){
                    super(props);
                    this.state = {isToggleOn : true};

                    //This binding is necessary to make `this` work in the callback(�� ���ε��� �ݹ鿡�� `this`�� �۵��ϵ��� �ϴ� �� �ʿ��մϴ�.)
                    this.handlerClick = this.handlerClick.bind(this);

                    handleClick() {
                        this.setState(state => ({
                            isToggleOn: !state.isToggleOn
                        }));
                    }

                    render(){
                        return (
                            <button onClick={this.handlerClick}>
                                {this.state.isToggleOn > 'ON' : 'OFF'}
                            </button>
                        )
                    }
                }
            }
            �Ǵ�
            class LoggingButton extends React.Component {
                // This syntax ensures `this` is bound within handlClick.(�� ������ `this`�� handlClick ������ ���ε��ǵ��� �մϴ�.)
                // Warning: this is *experimental* syntax.(���: �̰��� *������* �����Դϴ�.)
                handlClick = () => {
                    console.log('this is:',this);
                }

                render(){
                    return (
                        <button onClick={this.handleClick}>
                            Click me
                        </button>
                    );
                }
            }
            �̹��� ���� function�� ����� ��� 
            class LogginButton extends React.Component {
                handleClick() {
                    console.log('this is:', this);
                }

                render(){
                    //This syntax ensures `this` is bound widhin handleClick
                    return (
                        <button onClick={(e) => this.handleClick(e)}>
                            Click me
                        </button>
                    )
                }
            }
    
    Event Handler�� Arguments �����ϱ�
        Argument(����)
        �Լ��� ������ ����(�Լ��� ������ ������)
        Event Handler�� ������ �����Ͷ�� �ϴµ� Parameter��� �θ���

        id��� argument�� deleteRow �Լ��� ����
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
*/