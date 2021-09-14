/*
    Components(구성 요소)
        Component-Based는 React를 구성하는 구성 요소중 하나이다.
        React에서는 Components라는 중요한 개념이 나오는데 모든 React 페이지가 Component로 구성 되어있고
        하나의 Component는 또다른 Component로 구성되어 있다고 할 수 있다.
        이갓드을 Component-Based라고 하고 React는 Component-Based 기반으로 볼 수 있다고 하면 된다.
        쉽게 말해서 레고 블록 조립하듯 컴포넌트들을 모아서 개발이라고도 볼 수 있다.
    
    Props(Property의 줄임말)
        Component의 속성 
        하나의 Component에 Props를 각기 다르게 넣으면 Elmemts의 모양은 똑같지만 속을 뜯어보면 서로 다른 Props들이 있다.
        Props의 경우에는 Read-Only 만 가능해서 수정을 할 수가 없다 이 말은 Props같은 경우에는 읽기만 할 수 있기 때문에 값을 변경할 수 없다.

        input을 변경하지 않으며, 같은 input에 대해서 항상 같은 output을 리턴.
            function sum(a,b) {
                return a + b;
            }
            이코드는 a,b를 받아서 a,b를 더해서 리턴을 해주는 코드이다. 
            이것을 Pure라고 부른다.
        
        input을 변경함.
            function widthdraw(account, amount) {
                account.total -= amount;
            }
            이 코드 같은에는 input이 amount인데 input값을 바뀌었다 이런 걸 Impure라고 부른다.

        모든 React components는 그들이 Porop에 관해선 Pure 함수 같은 역할을 해야한다.
        (Props를 직접 바꿀 수 없고, 같은 Props에 대해선 항상 같은 결과를 보여줄 것!!)


    

*/