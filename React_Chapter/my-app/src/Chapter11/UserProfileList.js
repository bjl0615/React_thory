import React from "react";
import UserProfile from "./UserProfile";

class UserProfileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users : [
                { id:1 , name: 'Inje', Image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'Software Engineer' },
                { id:2 , name: 'Leo', Image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'Actor' },
                { id:3 , name: 'Jeff', Image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'CEO, Amazon' },
                { id:4 , name: 'Tim', Image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'CEO, Apple' },
                { id:5 , name: 'Robert', Image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'Actor' },
                { id:6 , name: 'Scarlett', Image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'Actress' },
            ]
        }
    }

    render() {
        const {users} = this.state;

        return (
            <div>
                {users.map((user) =>{
                    return (
                        <UserProfile
                            user={user} />
                    )
                })}
            </div>
        )
    }
}

export default UserProfileList;