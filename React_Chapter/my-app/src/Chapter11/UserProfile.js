import React from 'react';

function FancyBorder(props) {
    return(
        <div style={Object.assign(props.style, {
            display:'inline-block',
            borderStyle:'solid',
            borderWdith: 2,
            borderColor: '#80d900',
            borderRadius: 16,
            textAligin: 'center'})}>
            <div style={{
                padding: 8,
                backgroundColor: '#80d900',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12}}>
                <span style={{ fontSize: 16, }}>
                    {props.title}
                </span>
            </div>
            <div stlye={{marginTop: 8}}>
            {props.children}
            </div>
        </div>
    )
}

    const styles = {
        imageContainer: {
            width: 50 ,
            margin: 'auto',
        },
        image : {
            width: 50,
            height: 50,
            borderRadius : 25,
        },
        joinContainer : {
            padding: 8,
        },
        jobText: {
            fontSize: 16,
        }
    };

    class UserProfile extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { user } = this.props;
            
            return (
                <FancyBorder
                    title={user.name}
                    style={{width: 'calc(33.3% - 12px}', margin: 4}}>
                    <div stlye={styles.imageContainer}>
                        <img
                            alt="profile"
                            src={user.image}
                            style={styles.image} />
                    </div>
                    <div style={styles.jobContainer}>
                        <span style={styles.jobText}>
                            {user.job}
                        </span>
                    </div>
                </FancyBorder>
            )
        }
    }

export default UserProfile;