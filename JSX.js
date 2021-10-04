/*
    JSX
        JSX(JavaScript XML)는 자바스크립트의 확장 문법이다.
        UI 다루는 코드의 가독성을 높이기 위해 고안된 문법이다.
        createElement() 함수를 직접 사용하는 방식은 읽기 어려운 UI 코드를 만들 수 밖에 없다.

        JSX는 마치 마크업 문법 같다.
            <h1>Hello world</h1> // React.createElement('h1', null, 'Hello world')
        
        JSX를 사용하면 리액트 UI 코드의 모습이 HTML과 닮는다.
        돔 구조와 유사하기 때문에 코드로부터 UI을 쉽게 추측할 수 있다.
        JSX로 만든 코드는 바벨에 의해 변환되는데 React.crateElement() 함수 호출로 대체 된다.

        부모/자식 관계도 HTML과 같다.
            <header>
                <h1>Hello world</h1>
            </header>

        확실히 UI 코드의 가독성이 개선되었다
        이것도 마찬가지로 바벨에 의해 React.createElement() 함수 호출로 변환된다.
        리액트 엘리먼트를 반환하기 때문에 때문에 ReactDOM.render()의 인자로 전달될 수 있다.

        헬로 월드 코드를 JSX 문법을 사용해보자.
            // 1
            const element = (
            <header>
                <h1>Hello world</h1>
            </header>
            )

            // 2
            ReactDOM.render(element, document.querySelector("#app"))

        JSX는 자바스크립트 표현식이기 때문에 값으로 평가되고 반환된 리액트 앨리먼트를 element 상수에 할당했다(1).
        이 엘리먼트를 ReactDOM.render()에 전달하면 가상돔을 만들고 이걸 "#app" 엘리먼트에 붙여 렌더링되고 우리눈에 "hello world"란 텍스트를 볼 수 있는 것이다.

        

*/