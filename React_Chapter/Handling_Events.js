/*
    Event
        특정 사건을 의미
        버튼 클릭 이벤트(사용자가 버튼을 클릭한 사건)
            <button ocClikc={activateLasers}>
                Active Lasers
            </button>
         DOM에도 이벤트가 있고,
         React에도 이벤트가 있다.
                HTML
            <button onclick="activateLasers()">
                Active Lasers
            </button>

                React
            <button onClick={activateLasers}>
                Activate Lasers
            </button>
    
    Event Handler
        이벤트를 처리하는 함수
        어떤 사건이 발생하면, 사건을 처리하는 역할
        Event Listener라고도 부름

        Event Handler를 어떻게 추가할까?
            class Toggle extends React.Componet {
                constructor(props){
                    super(props);
                    this.state = {isToggleOn : true};

                    //This binding is necessary to make `this` work in the callback(이 바인딩은 콜백에서 `this`가 작동하도록 하는 데 필요합니다.)
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
            또는
            class LoggingButton extends React.Component {
                // This syntax ensures `this` is bound within handlClick.(이 구문은 `this`가 handlClick 내에서 바인딩되도록 합니다.)
                // Warning: this is *experimental* syntax.(경고: 이것은 *실험적* 구문입니다.)
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
            이번엔 에러 function을 사용한 방법 
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
    
    Event Handler에 Arguments 전달하기
        Argument(주장)
        함수에 주장할 내용(함수에 전달할 데이터)
        Event Handler에 전달할 데이터라고 하는데 Parameter라고도 부른다

        id라는 argument를 deleteRow 함수에 전달
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
*/