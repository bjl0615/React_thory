/*
    Lists
        List���� ��� Array(�迭�� ��Ÿ����)
        �迭�� JavaScript�� ������ ��ü���� �ϳ��� ������ ������� ��
        const numbers = [1,2,3,4,5];
        React������ Array�� ����Ͽ� �ټ��� Element�� ������ �� �� �ִ�.
                JavaScript Array�� map() �Լ��� ���
            const numbers = [1,2,3,4,5];
            const lintItems = numbers.map((number) =>
                <li>{number}</li>
            );

            ReactDOM.render(
                <ul>{listItems}</ul>
                document.getElementsById('root')
            );

            ReactDOM.render(
                <ul>
                    <li>{1}</li>
                    <li>{2}</li>
                    <li>{3}</li>
                    <li>{4}</li>
                    <li>{5}</li>
                </ul>,
                document.getElementById('root')
            );
        ������ Component�� �����
            function NumberList(props) {
                cont numbers = props.numbers;
                cont listItems = numbers.map((number) =>
                    <li>{number}</li>
                );
                return (
                    <ul>{listItems}</ul>
                );
            }

            const numbers = [1,2,3,4,5];
            ReactDOM.render(
                <NumberList numbers={numbers} />
                document.getElementById('root')
            );

   Keys
        ������� ���� ������ �ʴ� �� Key�� �ϳ��ϳ��� ���� ������ ���� ������.
        ����۵��� �����ϱ� ���� ������ ���ڿ�
        Key�� ���� �ش� Elements���̿����� ������ ���̸� �ȴ�.
        �v�� ���ؼ� �ڱⰡ ���� List������ Ű ���� �ߺ��� �ȵǸ� �ȴ�.
                    key�� ���� ����ϴ� ���
                const numbers = [1,2,3,4,5];
                const listItems = numbers.map((number) =>
                    <li key={number.toString()}
                        {number}
                    </li>  
                );

                    key�� ��ü�� ID�� ����ϴ� �ܿ�
                const todoItems = todos.map((todo) =>
                    <li key={todo.id}>
                        {todo.text}
                    </li>  
                );

                    key�� index�� ����ϴ� ���
                const todoItems = todos.map((todo, index) =>
                    //Only do thos if items have no stable IDs
                    <li key={index}>
                        {todo.text}
                    </li>  
                );
        
        Key�� �̿��Ͽ� ListItem Component �����
                function NumberList(props) {
                    const numbers = props.numbers;
                    const listItems = numbers.map((number) =>
                        //Correct! Key should be specified inside the array.
                        <ListItem key={number.toString()}
                                    value={number} />
                    );
                    return (
                        <ul>
                            {listItems}
                        </ul>
                    );
                }

        map() �ȿ� �ִ� element�� key�� �ʿ��ϴ�!
                    key�� props�� ���޵��� �ʴ´�.
                const content = posts.map((post) =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title} />
                );

                    JSX�ȿ� map() �ֱ�
                function NumberList(props) {
                    const numbers = props.numbers;
                    const listItems = numbers.map((number) =>
                        <ListItem key={number.toString()}
                            value={number} />    
                    );

                    return (
                        <ul>
                            {listItems}
                        </ul>
                    );
                }
            
                �� �ڵ尡 
                
                function NumberList(props) {
                    const numbers = props.numbers;
                    return(
                        <ul>
                            {numbers.map((number) =>
                                <ListItem key={number.toString()}
                                            value={number} />
                            )}
                        </ul>  
                    );
                }


*/      