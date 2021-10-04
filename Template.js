/*
    테플릿 언어
        엘리먼트를 생성할 때 document.createElement() 함수를 사용한다. 
        트리 형태의 돔에 맞게 엘리먼트를 간의 부모-자식 관계를 만들어야 한다.
        가령 아래 두 엘리먼트는 부모-자식 관계다.
            const h1 = document.createElement("h1") // 1
            const header = document.createElement("header") // 2
            header.appendChild(h1) // 3
        엘리먼트 h1을 만들고(1) 이걸 자식으로 갖을 header 엘리먼트도 만든다(2). 그리고 나서 appendChild() 함수를 이용해 h1을 header의 자식 엘리먼트로 만들었다(3).

        트리 형태의 웹 문서 구조상 이런 코드는 늘어나기 마련이다.
        문제는 UI를 나타내는 코드가 읽기 어렵다는 것이다.
        코드를 유심히 들여다 봐야만 UI를 가늠할 수 있다.

        그래서 대안으로 나오는 것이 템플릿 언어다.
        핸들바, Pug가 대표적이고 앵귤러와 Vue.js도 나름의 템플릿 기능을 지원한다.

        그럼 리액트는 어떤가?
        리액트 자체는 템플릿 언어를 지원하지 않는다.
        그야말로 UI만 담당하는 아주 작은 라이브러리이기 때문이다.

        리액트 엘리먼트를 생성하는 함수인 createElement()로 자식 요소를 추가할수는 있지만 썩 쉬운 편은 아니다.
            const h1 = React.createElement("h1", null, "Hello world")
            const header = React.createElement("header", null, h1)

        개발을 할 수는 있지만 개발해야 UI가 늘어날 수록 불편한 것이 사실이다.
        읽기 어려운 코드가 되기 때문이다.

        리액트에서는 JSX라는 자바스크립트 확장 문법을 사용한다.
*/