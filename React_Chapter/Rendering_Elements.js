/*
    Elements��?
        Elements�� ���� �ܾ�� ���,�����̶�� ���� ���� �ִ�.
        �׷� React�� Elements�� ���,�����ϱ�? �ణ ����� �ǹ̴� ������
        React���� Elements�� (Elements are the smallest building blocks of React apss.)React ���� �����ϴ� ���� ���� ����̶�� �Ѵ�.
        �׷� ���⼭ �� �ǹ����� ��°� �׷� React�� ���� ��ϵ�� ����� ���ϱ�?
        Elemts�� ȭ�鿡�� ���̴� �͵��� ����ϴ� ���̴�.
        ���� �� 
            cont elemet = <h1>Hello, world</h1>;
            �� �ڵ�� h1�̶�� �±׷� ���ΰ� �ְ� elements��� ������ ����ٶ�� ���� ���ϰ� �ִ� JSX�ڵ��̴�.
            �� elements �ڵ带 Rendering�ϸ� ȭ�� ������� Hello, world�� ������ش�.
        �׷��� React���� elements�� ȭ�鿡 ���̴� �͵��� ����� �ϴµ� React�� �����ϴµ� ���� ���� ���� ����̴ٶ�� ���ظ� �ϸ� �ȴ�.

        �׷� elements�� � Ư¡�� ������ ������?
            ���� ���� React elemts are immutable�̶�� �ϴµ� immutable�̶�� ���� mutable�� �ݴ��ε� �׷� mutable�� ���� ���ϱ�?
            mutable�� ���� �� �Ҵ� �ٲ� �� �ִ� �̶�� ���� ���ϰ� �ִ�.
            immutable�� ���� �Һ����̶�� ���� ���� �ִ�.
            React���� immutable�� Elements �����Ŀ��� children�̳� attribue�� �ٲ� �� ����! ��� ���� �ǹ��Ѵ�.\
            �ٽ� ���ؼ� React���� Elements�� ������ �ϸ� �װ��� �ٲ� �� ���ٴ� ���̴�.

        ��(DOM)�̶�?
            ������ �˱� ���� �켱 ���� ������� �����غ���.
            DOM(Document Object Model)�� ���� ��Ǯ�� �״�� ���ڸ� ���� ��ü ���� �ǹ��Ѵ�.
            �׷��ٸ� ���⼭ ���ϴ� ���� ��ü��?
            ���� ��ü�� hmtl, head, body�� ���� �±׵��� javascript�� �̿��� �� �ִ� (�޸𸮿� ������ �� �ִ�) ��ü�� �ǹ��Ѵ�.
            ���� ���̶� 
            (�� �������� �̷�� �±׵��� �ڹٽ�ũ��Ʈ�� �̿��� �� �ְԲ� �������� Ʈ�������� ���� ��ü ���� �ǹ��Ѵ�.)
            �ٽ� ���� DOM�� HTML�� ��ũ���þ��(Javascript)�� ���� �̾��ִ� ������ �ϰ� �ִ�.

        Elements�� DOM�� ������ �ϱ�
            <div id="root"></div> ���� HTML �ڵ尡 �ϳ��ִ�. ���� ����ٰ� React Elemt�� �������� �Ұǵ� �̶� �̰��� �츮�� Root DOM �̶�� �θ���.
            �� div �ȿ� �ִ� ��� �͵��� React DOM�� ���ؼ� �����Ǳ� ������ �츮�� Root DOM node ��� �θ��� ���� React������ ������� �۵��� �� �ϳ��� root DOM node�� ������ �ǰ�
            �ݸ鿡 React�� ������ �ϰ� �Ǹ� �������� �и��� �� ����  Root DOM���� ���� ���� �ִ�.
            
                cont elements = <h1>Hello, world</h1>
                ReactDOM.render(elements,
                document.getElementById('root'));
            �׸��� �̷������� elements�� ���� �������� �ϰ� �ȴ�.

        �������� Elements�� ������Ʈ �ϱ�
            React�� Elements �����Ŀ��� �Һ��� ������ ��ĥ ���� ���� �׷� �ٽ� �������� �Ͽ� �ؾ��ұ�?
                    function tick() {
                        const elemet = (
                            <div>
                                <h1>Hell, world!</h1>
                                <h2>It is {new Date().toLocaleTimeString()}.
                                </h2>
                            </div>
                        );

                        ReactDOM.render(element,
                            document.getElementById('root'))'
                    }

                    setInterval(tick,1000);
                �� �ڵ�� ���ʸ��� ���ο� �ڵ帣 ���� �������� ���ִ� �ڵ��̴�.
                ��, �ٲ� �κи� �ٽ� �������� �Ͽ��� �����ش�.


*/