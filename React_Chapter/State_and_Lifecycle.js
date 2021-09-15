/*
    State(상태)
        React component의 상태
        component에 대한 변경 가능한 데이터
        state는 사용자가 정의한다.
        state는 JavaScript 객체이다.
            class LikeButton extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        liked: false
                    };
                }
            }

        state는 직접 수정 할 수 없다 (하면 안된다)
            render() {
                if( this.state.liked) {
                    return 'You liked this.';
                }

                return e(
                    'button',
                    { onClick: () => this.setState({ liked: true}) },
                    'Like'
                );
            }
    
    Lifecycle(생명주기)
        Component Lifecycle
        React component의 생명주기
        
        
*/