/*
    Lists
        List같은 경우 Array(배열로 나타낸다)
        배열은 JavaScript의 변수나 객체들을 하나의 변수로 묶어놓은 것
        const numbers = [1,2,3,4,5];
        React에서는 Array를 사용하여 다수의 Element를 렌더링 할 수 있다.
                JavaScript Array의 map() 함수를 사용
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
        별도의 Component로 만들기
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
        열쇠들은 모양아 같지가 않다 즉 Key는 하나하나의 값이 고유한 값을 가진다.
        어아템들을 구분하기 위한 고유한 문자열
        Key의 값은 해당 Elements사이에서만 고유한 값이면 된다.
        쉡게 말해서 자기가 속한 List에서만 키 값이 중복이 안되면 된다.
                    key로 값을 사용하는 경우
                const numbers = [1,2,3,4,5];
                const listItems = numbers.map((number) =>
                    <li key={number.toString()}
                        {number}
                    </li>  
                );

                    key로 객체의 ID를 사용하는 겨우
                const todoItems = todos.map((todo) =>
                    <li key={todo.id}>
                        {todo.text}
                    </li>  
                );

                    key로 index를 사용하는 경우
                const todoItems = todos.map((todo, index) =>
                    //Only do thos if items have no stable IDs
                    <li key={index}>
                        {todo.text}
                    </li>  
                );
        
        Key를 이용하여 ListItem Component 만들기
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

        map() 안에 있는 element는 key가 필요하다!
                    key는 props로 전달되지 않는다.
                const content = posts.map((post) =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title} />
                );

                    JSX안에 map() 넣기
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
            
                이 코드가 
                
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