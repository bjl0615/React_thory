/*
    Composition(����)
        �������� ������Ʈ�� ���ļ� ���ο� ������Ʈ�� ����� ��

        Composition �����
            �������� ������Ʈ���� ��� ������ ���ΰ�?

            Containment
                ���� Sidebar�� Dialog ���� Box������ ������Ʈ�� �ڽ��� ���� ������Ʈ�� �̸� �� �� ����.
                �̷� ��쿡 children�̶�� prop�� ����ؼ� ����!
                        children prop�� ����� FancyBorder ������Ʈ
                    function FancyBorder(props){
                        return(
                            <div clasName={'FancyBorder FancyBorder-'} + props.color}>
                                {props.children}
                            </div>
                        );
                    }
                        FancyBorder ������Ʈ �ȿ� �ִ� ��� JSX �±״� children���� ���޵�
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
                �������� children ������ �ʿ��� ���� ��� �ұ�?
                        left�� right�� �����Ͽ� prop�� ����
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
                        left�� right�� ���� �������� ������Ʈ �־���
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
            
            Specialization(����ȭ, Ư��ȭ)
                WelcomeDialog�� Dialog�� Ư���� ���̽��̴�.
                ������ ��ü���� ������ ���(inheritance)�� ����Ͽ� Spercialization�� ����
                ������ React������ Composition�� ����Ͽ� Spercialization�� �����Ѵ�!
                    
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

                Contaiment�� Specialization�� ���� ����غ���
                        Dialog ������Ʈ
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