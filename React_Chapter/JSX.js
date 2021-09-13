/*
    JSX
        리엑트에서 굉장히 중요한 개념이자 굉장히 많이 쓰인다.
        A syntax extension to JavaScript(자바스크립트의 구문확장)
        쉽게 말해서 JSX란 JavsScript에다가 XML/HTML을 더한것이다
        React에서 JSX를 쓰는 것이 필수는 아님!! 하지만 얻을 수 있는 장점들이 많아서 쓰는 것을 권장

        JSX의 장점
            1. 간결한 코드
            2. 가독성 향상
            3. 버그를 발견하기 쉬움
            4. Injection Attacks 방어
        
        JSX는 객체를 나타냄
            React.createElement()의 결과롤 아래와 같은 객체가 생성됨
                consr element = {
                    type: 'h1',
                    props: {
                        className : 'greeting',
                        children: 'Hello, world!'
                    }
                };
                    'React elements'

        JSX 사용법
           간딘하게 말해서 JavaScript 코드와 XML / HTML 코들 섞어서 같이 만들면 되는데 
                const name = 'Josh Perez';
                const elements = <h1>Hello, {name}</h1>;

                ReactDOM.render(
                    element,
                    document.getElememtsById('root')
                );

            기본 적으로 JSX 코드는
                    ... XML / HTML
                    {JavaScript 코드}
                    ... XML / HTML
            이런형식을 작성을 한다   
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
    값을 정의하는 법
        큰 타옴표 사이에 문자열을 넣거나,
            const element = <div tabIndex="0"></div>;
        
        중괄호 사잉에 JavaScript코드를 넣으면 됨!
            const element = <img src={user.avatarUrl}></img>;

    Children 정의하기
        const element = (
            <div>
                <h1>Hello!</h1>
                <h2>Good to see you here. </h2>
            </div>
        );

    create-react-app 설치
            준비과정 
        1. Node v6 이상
        2. npm v5.2 이상

            실행과정
        1. npx create-react-app "원하는 이름" 입력
        2. 설치가 완료되면 입력한 이름의 폴더가 생성 되는데 그 폴더의 구조는
            "원하는 이름"
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
        3. npm start 입력 (stat-script 실행되면서 리엑트 앱이 돌아간다.)(developer build(개발 빌드))
            
        (Production build(생산 빌드) 해보기)
        1. npm run build 실행 (실행되면서 Production build 생성됨)
        2. sudo npm install -g serve 입력 (-g 옵션은 글로벌이라는 설치하는 컴퓨터 모든 곳에서 사용할 수 있는 명령어가 된다.),(sudo는 슈퍼 계정으로 입력을 해야만 -g 옵션이 써진다.) 나는 sudo를 쓰면 실행할 수 있는 배치 파일이 아니라고 떠서 빼고 하니깐 잘 된다..
        3. 위에를 입력하면 serve란게 생성이 된다.
        4. serve -s build를 입력하면 Serving이 완료가 된다.

*/