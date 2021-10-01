/*
    가상돔
        데이터만 관리하면 값의 변화가 UI까지 반영되다는 것은 무척 매력적인 아이디어다.
        코드양이 줄어드니깐. 그만큼 버그도 줄어 든다.
        한편 상태 변화가 UI에 반영되려면 DOM API 호출은 불가피하다.
        상태가 변하는 횟수만큼 돔 API 호출은 비례한다.  
        이것은 곧장 브라우져 성능에 영향을 주는 요인이 된다.

        브라우져가 HTML과 CSS로 화면을 그리는 과정은
            1. HTML 코드를 파싱해서 DOM 트리를 만든다
            2. CSS 코드를 CSSOM 트리를 만든다
            3. 두 트리를 합쳐 렌더트리를 만든다
            4. 레이아웃을 계산한다
            5. 픽셀로 화면에 그린다
        
        주요렌더링경로(Critical Render Path)라고도 불리는 이 과정은 자바스크립트로 돔 구조를 변경하면 레이아웃다시 계산에 픽셀로 화면에 다시 그린다.
        돔을 수정한만큼 이 작업이 반복되기 때문에 페이지 렌더링 성능에 영향을 주는 요소이다.
    
        주요렌더링경로(Critical Render Path)라고도 불리는 이 과정은 자바스크립트로 돔 구조를 변경하면 레이아웃다시 계산에 픽셀로 화면에 다시 그린다.
        돔을 수정한만큼 이 작업이 반복되기 때문에 페이지 렌더링 성능에 영향을 주는 요소이다.

        어떻게 개선할 수 있을까?
        아주 단순한 방법은 돔 API를 적게 사용하면 된다.
        어떻게 횟수를 줄인다 말인가?
        캐쉬. 디스크에 담겨있는 프로그램 명령어는 CPU까지 가야만 실행된다.
        디스크에 접근하는 시간은 비교적 무척 느리기 때문에 이를 개선하기 위해 중간에 메모리를 캐쉬로 두어 명령어 로딩 속도를 올리는 것이다.
        돔 호출도 이런식으로 캐쉬 계층을 두면 해결할 수 있지 않을까?
        트리 구조의 돔과 유사한 가상돔(Vritual DOM)을 만들어 메모리에서 관리할 수 있겠다.
        플리케이션에서 화면 변경을 돔에게 직접 요청하는 것이 아니라 가상돔에게 요청한다.
        리액트는 렌더링할 때마다 전체 가상돔을 만들고 이전 가상돔과의 차이를 찾는다.
        차이가 있는 부분만 실제 돔에 반영하고 차이가 없으면 렌더링 요청이 있더라도 무시하는 방식으로 성능을 낸다.

*/