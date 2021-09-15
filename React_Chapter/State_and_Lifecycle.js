/*
    State(����)
        React component�� ����
        component�� ���� ���� ������ ������
        state�� ����ڰ� �����Ѵ�.
        state�� JavaScript ��ü�̴�.
            class LikeButton extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        liked: false
                    };
                }
            }

        state�� ���� ���� �� �� ���� (�ϸ� �ȵȴ�)
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
    
    Lifecycle(�����ֱ�)
        Component Lifecycle
        React component�� �����ֱ�
        
        
*/