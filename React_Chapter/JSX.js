/*
    JSX
        ����Ʈ���� ������ �߿��� �������� ������ ���� ���δ�.
        A syntax extension to JavaScript(�ڹٽ�ũ��Ʈ�� ����Ȯ��)
        ���� ���ؼ� JSX�� JavsScript���ٰ� XML/HTML�� ���Ѱ��̴�
        React���� JSX�� ���� ���� �ʼ��� �ƴ�!! ������ ���� �� �ִ� �������� ���Ƽ� ���� ���� ����

        JSX�� ����
            1. ������ �ڵ�
            2. ������ ���
            3. ���׸� �߰��ϱ� ����
            4. Injection Attacks ���
        
        JSX�� ��ü�� ��Ÿ��
            React.createElement()�� ����� �Ʒ��� ���� ��ü�� ������
                consr element = {
                    type: 'h1',
                    props: {
                        className : 'greeting',
                        children: 'Hello, world!'
                    }
                };
                    'React elements'

        JSX ����
           �����ϰ� ���ؼ� JavaScript �ڵ�� XML / HTML �ڵ� ��� ���� ����� �Ǵµ� 
                const name = 'Josh Perez';
                const elements = <h1>Hello, {name}</h1>;

                ReactDOM.render(
                    element,
                    document.getElememtsById('root')
                );

            �⺻ ������ JSX �ڵ��
                    ... XML / HTML
                    {JavaScript �ڵ�}
                    ... XML / HTML
            �̷������� �ۼ��� �Ѵ�   
*/  
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}    

const user = {
    firstName : 'Harper',
    lastName : 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDom.render(
    element,
    document.getElementById('root')
)

/*
    ���� �����ϴ� ��
        ū Ÿ��ǥ ���̿� ���ڿ��� �ְų�,
            const element = <div tabIndex="0"></div>;
        
        �߰�ȣ ���׿� JavaScript�ڵ带 ������ ��!
            const element = <img src={user.avatarUrl}></img>;

    Children �����ϱ�
        const element = (
            <div>
                <h1>Hello!</h1>
                <h2>Good to see you here. </h2>
            </div>
        );
*/