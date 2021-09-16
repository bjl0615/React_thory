/*
    Conditional Rendering
        Condition = ����
        Conditional Rendering = ���ǿ� ���� ������
        ������� True�̸� ��ư�� �����ְ�, False�̸� ��ư�� ������.
            function UserGreeting(props) {
                return <h1>Welcome back!</h1>;
            }

            function GuestGreeting(props) {
                return <h1>Please sign up.</h1>
            }
            
            function Greeting(props) {
                const isLoggedIn = props.insLoggedIn;
                if(isLoggedIn){
                    return <UserGreeting />;
                }
                return <GuestGreeting />;
            }

            ReactDOM.render(
                //Try changing to isLoggedIn={true};
                <Greeting isLoggedIn={false} />,
                document.getElementById('root')
            );

    Element Variables
        function LoginButton(props) {
            return (
                <button onClick={peops.onClick}>
                    Login
                </button>
            );
        }

        function LogoutButton(props) {
            return (
                <button onClick={props.onClick}>
                    Logout
                </button>
            );
        }

        handleLoginClick() {
            this.setState({isLoggedIn: true});
        }

        handleLogoutClick() {
            this.setState({isLoggendIn: flase});
        }

        render(){
            const isLoggedIn = this.state.isLoggedIn;
            let button;

            if(isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick} />;
            } else {
                button = <LoginButton onClick={this.handleLoginClick} />;
            }

            return (
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                </div>
            );
        }

    Inline Conditions
        ������ �ڵ� �ȿ� ����ִ� ��
        if���� ��� && �����ڸ� ���
            true && experssion -> expression
            false && expression -> false
        
            function Mailbox(props) {
                const unreadMessages = props.unreadMessages;
                return (
                    <div>
                        <h1>Hello!</h1>
                        {unreadMessages.length > 0 &&
                            <h2>
                                You have {unreadMessages.length} unread messages.
                            </h2>
                        }
                    </div>
                );
            }

            const messages = ['React', 'Re: React', 'Re:Re: React'];
            ReactDOM.render(
                <Mailbox unreadMessages={messages} />,
                document.getElementById('root')
            );

        if-Else���� ��� ? �����ڸ� ���
            condition ? true : false
            
            render() {
                const isLoggedIn = this.state.isLoggedIn;
                return (
                    <div>
                        The user is <b>{isLoggedIn ? 'currently : 'not'}</b> loggedin.
                    </div>
                )
            }

            render(){
                const isLoggedIn = this.state.isLoggedIn;
                return (
                    <div>
                        {isLoggedIn ? (
                            <LogoutButton onClick={this.handleLogoutClick} />
                        ): (
                            <LoginButton onClick={this.handleLoginClick} />
                        )}
                    </div>
                )
            }
    
    Component ������ ����
        null�� �����ϸ� ������ ���� ����
            function WarningBanner(props) {
                if(!props.warn) {
                    return null;
                }

                return (
                    <div className="warning">
                        Warning!
                    </div>
                )
            }
*/