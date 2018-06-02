import React from 'react';
import ReactDOM from 'react-dom';
import { ShowList, AddFriend } from './Child';

export class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Ed',
            friends: ['Amy', 'Peter', 'Greg']
        }

        this.addFriend = this.addFriend.bind(this);
        this.deleteFriend = this.deleteFriend.bind(this)
    }

    addFriend(friend) {
        this.setState((state => ({
            friends: state.friends.concat([friend])
        })))
    }

    deleteFriend(friend) {
        var index = this.state.friends.indexOf(friend);
        if (index !== -1) {
            this.setState(this.state.friends.splice(index, 1));
        }
    }

    render() {
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} delete={this.deleteFriend} />
            </div>
        )
    }
}

