import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': 'ed'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                Hi {this.props.name} <br />
                Change name:
                <input type="text" value={this.props.name} onChange={this.handleChange} />
            </div>)
    }
}

export class ShowList extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }
    render() {
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend) => 
                    <span>
                    <li>{friend}</li>
                    <button value={friend} onClick={this.handleDelete}>X</button>
                    </span>)}
                </ul>
            </div>
        )
    }

    
    handleDelete(e) {
        this.props.delete(e.target.value)
    }
}

ShowList.defaultProps = {
    names: ["No friends"]
}

export class AddFriend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }

    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }


    handleAddNew() {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}>Add new</button>
            </div>
        )
    }
}