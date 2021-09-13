/*
    Elements란?
        Elements란 영어 단어는 요소,성분이라는 뜻을 갇고 있다.
        그럼 React의 Elements는 요소,성분일까? 약간 비슷한 의미는 맞지만
        React에서 Elements는 (Elements are the smallest building blocks of React apss.)React 앱을 구성하는 가장 작은 블록이라고 한다.
        그럼 여기서 또 의문점이 드는게 그럼 React는 작은 블록들로 만드는 것일까?
        Elemts는 화면에서 보이는 것들을 기술하는 것이다.
        예를 들어서 
            cont elemet = <h1>Hello, world</h1>;
            이 코드는 h1이라는 태그로 감싸고 있고 elements라는 변수에 담느다라는 뜻을 지니고 있는 JSX코드이다.
            이 elements 코드를 Rendering하면 화면 출력으로 Hello, world를 출력해준다.
        그래서 React에서 elements는 화면에 보이는 것들을 기술을 하는데 React를 구성하는데 가장 작은 빌딩 블록이다라고 이해를 하면 된다.

        그럼 elements는 어떤 특징을 가지고 있을까?
            가장 먼저 React elemts are immutable이라고 하는데 immutable이라는 것은 mutable의 반댓말인데 그럼 mutable은 무슨 뜻일까?
            mutable은 변할 수 았는 바꿀 수 있는 이라는 뜻을 지니고 있다.
            immutable의 뜻은 불변성이라는 뜻을 지고 있다.
            React에서 immutable은 Elements 생성후에는 children이나 attribue를 바꿀 수 없다! 라는 것을 의미한다.\
            다시 말해서 React에서 Elements를 생성을 하면 그것을 바꿀 수 없다는 뜻이다.

        돔(DOM)이란?
            가상돔을 알기 위해 우선 돔의 개념부터 정리해보자.
            DOM(Document Object Model)을 영어 뜻풀이 그대로 하자면 문서 객체 모델을 의미한다.
            그렇다면 여기서 말하는 문서 객체란?
            문서 객체란 hmtl, head, body와 같은 태그들을 javascript가 이용할 수 있는 (메모리에 보관할 수 있는) 객체를 의미한다.
            따라서 돔이란 
            (웹 페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미한다.)
            다시 말해 DOM은 HTML과 스크립팅언어(Javascript)를 서로 이어주는 역할을 하고 있다.

        Elements를 DOM에 렌더링 하기
            <div id="root"></div> 여기 HTML 코드가 하나있다. 이제 여기다가 React Elemt를 렌더링을 할건데 이때 이것을 우리는 Root DOM 이라고 부른다.
            이 div 안에 있는 모든 것들이 React DOM에 의해서 관리되기 때문에 우리가 Root DOM node 라고 부르고 오직 React만으로 만들어진 앱들은 단 하나의 root DOM node를 가지게 되고
            반면에 React를 연동을 하게 되면 여러개의 분리된 수 많은  Root DOM들을 가질 수도 있다.
            
                cont elements = <h1>Hello, world</h1>
                ReactDOM.render(elements,
                document.getElementById('root'));
            그리고 이런식으로 elements를 만들어서 렌더링을 하게 된다.

        렌더링된 Elements를 업데이트 하기
            React는 Elements 생성후에는 불변성 때문에 고칠 수가 없다 그럼 다시 렌더링을 하여 해야할까?
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
                이 코드는 매초마다 새로운 코드르 만들어서 렌더링을 해주는 코드이다.
                즉, 바뀐 부분만 다시 렌더링을 하여서 보여준다.


*/