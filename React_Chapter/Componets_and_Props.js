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
            

    

*/