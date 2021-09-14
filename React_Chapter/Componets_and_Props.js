/*
    Components(���� ���)
        Component-Based�� React�� �����ϴ� ���� ����� �ϳ��̴�.
        React������ Components��� �߿��� ������ �����µ� ��� React �������� Component�� ���� �Ǿ��ְ�
        �ϳ��� Component�� �Ǵٸ� Component�� �����Ǿ� �ִٰ� �� �� �ִ�.
        �̰����� Component-Based��� �ϰ� React�� Component-Based ������� �� �� �ִٰ� �ϸ� �ȴ�.
        ���� ���ؼ� ���� ��� �����ϵ� ������Ʈ���� ��Ƽ� �����̶�� �� �� �ִ�.
    
    Props(Property�� ���Ӹ�)
        Component�� �Ӽ� 
        �ϳ��� Component�� Props�� ���� �ٸ��� ������ Elmemts�� ����� �Ȱ����� ���� ���� ���� �ٸ� Props���� �ִ�.
        Props�� ��쿡�� Read-Only �� �����ؼ� ������ �� ���� ���� �� ���� Props���� ��쿡�� �б⸸ �� �� �ֱ� ������ ���� ������ �� ����.

        input�� �������� ������, ���� input�� ���ؼ� �׻� ���� output�� ����.
            function sum(a,b) {
                return a + b;
            }
            ���ڵ�� a,b�� �޾Ƽ� a,b�� ���ؼ� ������ ���ִ� �ڵ��̴�. 
            �̰��� Pure��� �θ���.
        
        input�� ������.
            function widthdraw(account, amount) {
                account.total -= amount;
            }
            �� �ڵ� �������� input�� amount�ε� input���� �ٲ���� �̷� �� Impure��� �θ���.

        ��� React components�� �׵��� Porop�� ���ؼ� Pure �Լ� ���� ������ �ؾ��Ѵ�.
        (Props�� ���� �ٲ� �� ����, ���� Props�� ���ؼ� �׻� ���� ����� ������ ��!!)
    
    Component �����
        Function Component
            function Welcome(props) {
                return <h1>Hello, {props.name}</h1>
            }
            �� �ڵ带 ���� props�� �޾Ƽ� React Component�� ��ȯ�ϱ� ������ �� �ڵ�� Function Component��� �θ� �� �ִ�.
        
        Class Components
            class Welcome extends React.Component {
                render() {
                    return <h1>Hello, {this.props.name}</h1>
                }
            }
            ���ڵ帣 ���� React.Component�� ����� �޾Ұ� props�� ����ؼ� React Elements�� ������ �ϰ� �ȴ�.

        Component�̸��� �Ի� �빮�ڷ� �����ؾ� �Ѵ�!
            HTML div �±׷� �ν�
                const element = <div />;

            Welcom�̶�� React Component�� �ν�
                const element = <Welcom name="Sara" />;

    Component ������
        DOM �±׸� ����� element
            const element = <div />;
        
        ������� ������ Component�� ����� element
            const element = <Welcome name="Sara" />;

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        const element = <Welcome name="Sara" />;
        ReactDOM.render(
            element,
            document.getElementById('root')
        )
        ReactDOM�� render �Լ��� ȣ���� �Ǹ� ���⼭ React�� element�� ������ �ô��� Welcome�̶�� Component�� ����� �ߴ�.
        �׷� ���� React������ Welcome Component�� name:'Sara'�� ���� props�� ���� �־ ���ο� element�� �����ϰ� �ȴ�.
        �׷� function�� Hello, {props.name} �� Hello, Sara�� ������ �Ѵ�.
    
    Component �ռ�
       Component�ȿ� �� �ٸ� Component�� �� �� �ִ�.
       ������ ȭ���� �������� Component�� ������ ���� ����!
             function Welecome(props){
                 return <h1>Hello, {props.name}</h1>
             }

             function App(){
                 return {
                     <div>
                        <Welcome name="Sara" />
                        <Welcome name="Cahal" />
                        <Welcome name="Edite" />
                    </div>
                 };
             }

             ReactDOM.render(
                 <App />,
                 document.getElementById('root')
             );
            
    Component ����
        ū ������Ʈ�� �����������!
        ���뼺�� �ø��� ���߼ӵ��� �ö󰡰� �ȴ�.
                function Comment(props) {
                    return (
                        <div className = "Comment">
                            <div className = "UserInfo">
                                <img className = "Avatar"
                                    src={props.author.avatarUrl}
                                    alt={props.author.name}
                                />
                                <div className="UserInfo-name">
                                    {props.author.name}
                                </div>
                            </div>
                            <div className="UserInfo-name">
                                {props.author.name}
                            </div>
                            <div className="Comment-text">
                                {prop.text}
                            </div>
                            <div className="Comment-date">
                                {formatDate(prop.date)}
                            </div>
                        </div>
                    );
                }

                1. Avatar �����ϱ�
                    function Avatar(props) {
                        return (
                            <img className="Avatar"
                                src={props.user.avatarUrl}
                                alt={props.user.name}
                            />
                        );
                    }

                    function Comment(props) {
                        return (
                            <div className = "Comment">
                                <div className = "UserInfo">
                                    <Avatar user={props.author} />
                                    <div className="UserInfo-name">
                                        {props.author.name}
                                    </div>
                                </div>
                                <div className="UserInfo-name">
                                    {props.author.name}
                                </div>
                                <div className="Comment-text">
                                    {prop.text}
                                </div>
                                <div className="Comment-date">
                                    {formatDate(prop.date)}
                                </div>
                            </div>
                        );
                    }
    
                2. UserInfo �����ϱ�
                    function UserInfo(props) {
                        return (
                            <div className = "UserInfo">
                                <Avatar user={props.user} />
                                <div className="UserInfo-name">
                                    {props.user.name}
                                </div>
                            </div>
                        );
                    }
*/