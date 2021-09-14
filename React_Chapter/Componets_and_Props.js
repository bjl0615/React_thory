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
    
    Component 만들기
        Function Component
            function Welcome(props) {
                return <h1>Hello, {props.name}</h1>
            }
            이 코드를 보면 props를 받아서 React Component를 반환하기 떄문에 이 코드는 Function Component라고 부를 수 있다.
        
        Class Components
            class Welcome extends React.Component {
                render() {
                    return <h1>Hello, {this.props.name}</h1>
                }
            }
            위코드르 보면 React.Component를 상속을 받았고 props를 사용해서 React Elements를 리턴을 하게 된다.

        Component이름은 함상 대문자로 시작해야 한다!
            HTML div 태그로 인식
                const element = <div />;

            Welcom이라는 React Component로 인식
                const element = <Welcom name="Sara" />;

    Component 렌더링
        DOM 태그를 사용한 element
            const element = <div />;
        
        사용지기 정의한 Component를 사용한 element
            const element = <Welcome name="Sara" />;

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        const element = <Welcome name="Sara" />;
        ReactDOM.render(
            element,
            document.getElementById('root')
        )
        ReactDOM의 render 함수가 호출이 되면 여기서 React는 element를 가지고 봤더니 Welcome이라는 Component를 사용을 했다.
        그럼 이제 React에서는 Welcome Component가 name:'Sara'란 것을 props에 집어 넣어서 새로운 element를 생성하게 된다.
        그럼 function은 Hello, {props.name} 즉 Hello, Sara를 리턴을 한다.
    
    Component 합성
       Component안에 또 다른 Component를 쓸 수 있다.
       복잡한 화면을 여러개의 Component를 나눠서 구현 가능!
             function Welecome(props){
                 return <h1>Hello, {props.name}</h1>
             }

             function App(){
                 return {
                     <div>
                        <Welcome name="Sara" />
                        <Welcome name="Cahal" />
                        <Welcome name="Edite" />
                    </div>
                 };
             }

             ReactDOM.render(
                 <App />,
                 document.getElementById('root')
             );
            
    Component 추출
        큰 컴포넌트를 산산조각내자!
        재상용성을 올리고 개발속도도 올라가게 된다.
                function Comment(props) {
                    return (
                        <div className = "Comment">
                            <div className = "UserInfo">
                                <img className = "Avatar"
                                    src={props.author.avatarUrl}
                                    alt={props.author.name}
                                />
                                <div className="UserInfo-name">
                                    {props.author.name}
                                </div>
                            </div>
                            <div className="UserInfo-name">
                                {props.author.name}
                            </div>
                            <div className="Comment-text">
                                {prop.text}
                            </div>
                            <div className="Comment-date">
                                {formatDate(prop.date)}
                            </div>
                        </div>
                    );
                }

                1. Avatar 추출하기
                    function Avatar(props) {
                        return (
                            <img className="Avatar"
                                src={props.user.avatarUrl}
                                alt={props.user.name}
                            />
                        );
                    }

                    function Comment(props) {
                        return (
                            <div className = "Comment">
                                <div className = "UserInfo">
                                    <Avatar user={props.author} />
                                    <div className="UserInfo-name">
                                        {props.author.name}
                                    </div>
                                </div>
                                <div className="UserInfo-name">
                                    {props.author.name}
                                </div>
                                <div className="Comment-text">
                                    {prop.text}
                                </div>
                                <div className="Comment-date">
                                    {formatDate(prop.date)}
                                </div>
                            </div>
                        );
                    }
    
                2. UserInfo 추출하기
                    function UserInfo(props) {
                        return (
                            <div className = "UserInfo">
                                <Avatar user={props.user} />
                                <div className="UserInfo-name">
                                    {props.user.name}
                                </div>
                            </div>
                        );
                    }
*/