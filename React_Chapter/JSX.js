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

    create-react-app ��ġ
            �غ���� 
        1. Node v6 �̻�
        2. npm v5.2 �̻�

            �������
        1. npx create-react-app "���ϴ� �̸�" �Է�
        2. ��ġ�� �Ϸ�Ǹ� �Է��� �̸��� ������ ���� �Ǵµ� �� ������ ������
            "���ϴ� �̸�"
                |____ README.md
                |____ node_modules 
                |____ package.json
                |____ .gitignore
                |____ public
                |     |__ favicon.ico
                |     |__ index.html
                |     |__ manifest.json
                |___ src
                      |__ App.css
                      |__ App.js
                      |__ App.test.js
                      |__ index.css
                      |__ index.js
                      |__ logo.svg
                      |__ serviceWorker.js
        3. npm start �Է� (stat-script ����Ǹ鼭 ����Ʈ ���� ���ư���.)(developer build(���� ����))
            
        (Production build(���� ����) �غ���)
        1. npm run build ���� (����Ǹ鼭 Production build ������)
        2. sudo npm install -g serve �Է� (-g �ɼ��� �۷ι��̶�� ��ġ�ϴ� ��ǻ�� ��� ������ ����� �� �ִ� ��ɾ �ȴ�.),(sudo�� ���� �������� �Է��� �ؾ߸� -g �ɼ��� ������.) ���� sudo�� ���� ������ �� �ִ� ��ġ ������ �ƴ϶�� ���� ���� �ϴϱ� �� �ȴ�..
        3. ������ �Է��ϸ� serve���� ������ �ȴ�.
        4. serve -s build�� �Է��ϸ� Serving�� �Ϸᰡ �ȴ�.

*/