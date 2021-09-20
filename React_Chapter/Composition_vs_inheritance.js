/*
    Composition(구성)
        여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것

        Composition 사용기법
            여러개의 컴포넌트들을 어떻게 조합할 것인가?

            Containment
                보통 Sidebar나 Dialog 같은 Box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없다.
                이런 경우에 children이라는 prop을 사용해서 조합!
                        children prop을 사용한 FancyBorder 컴포넌트
                    function FancyBorder(props){
                        return(
                            <div clasName={'FancyBorder FancyBorder-'} + props.color}>
                                {props.children}
                            </div>
                        );
                    }
                        FancyBorder 컴포넌트 안에 있는 모든 JSX 태그는 children으로 전달됨
                    function WelcomeDialog(){
                        return (
                            <FancyBorder color="blue">
                                <h1 className="Dialog-title">
                                    Welcome
                                </h1>
                                <p className="Dialog-message">
                                    Thank you for visiting our spacecraft!
                                </p>
                            </FancyBorder>
                        );
                    }
                여러개의 children 집합이 필요한 경우는 어떻게 할까?
                        left와 right로 구분하여 prop을 만듬
                    function SplitPane(props){
                        return (
                            <div className="SplitPane">
                                <div className="SplitPane-left">
                                    {props.left}
                                </div>
                                <div className="SplitPane-right">
                                    {props.right}
                                </div>
                            </div>
                        );
                    }
                        left와 right에 각각 렌더리할 컴포넌트 넣어줌
                    function App(){
                        return (
                            <SplitPane
                                left={
                                    <Contacts />
                                }
                                right={
                                    <Chat />
                                }
                        );
                    }
            
            Specialization(전문화, 특수화)
                WelcomeDialog는 Dialog의 특별한 케이스이다.
                기존의 객체지향 언어에서는 상속(inheritance)을 사용하여 Spercialization을 구현
                하지만 React에서는 Composition을 사용하여 Spercialization을 구현한다!
                    
                    function Dialog(props) {
                        return (
                            <FancyBorder color="blue">
                                <h1 className="Dialog-title">
                                    {props.title}
                                </h1>
                                <p className="Dialog=message">
                                    {props.message}
                                </p>
                            </FancyBorder>
                        );
                    }

                    function WelcomeDialog() {
                        return (
                            <Dialog
                                title="Welcome"
                                message = "Thank you for visiting our spacecraft!"
                            />
                        );
                    }

                Contaiment와 Specialization을 같이 사용해보기
                        Dialog 컴포넌트
                    function Dialog(props) {
                        return (
                            <FancyBorder color="blue">
                                <h1 className="Dialog-title">
                                    {props.title}
                                </h1>
                                <p className="Dialog-message">
                                    {props.message}
                                </p>
                                {props.children}
                            </FancyBorder>
                        );
                    }


                    class SignUpDialog extends React.Component {
                        constructor(props) {
                            super(props);
                            this.handleChange = this.handleChange.bind(this);
                            this.handleSignUp = this.handleChange.bind(this);
                            this.state = {login : ''};
                        }

                        render() {
                            return (
                                <Dialog title="Mars Exploration Program"
                                        message="How should we refer to you?">
                                    <input value={this.state.login}
                                            onChange={this.handleChange} />
                                    
                                    <button onClick={this.handleSugnUp}>
                                        Sign Me Up!
                                    </button>
                                </Dialog>
                            );
                        }

                        handleChange(e) {
                            this.setState({loginL e.target.value});
                        }

                        handleSugnUp() {
                            alert(`Welcome aboard, ${this.state.login}!`);
                        }
                    }
                    

*/