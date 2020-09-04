import React from 'react';
import './Friend.css';
import { Link, useHistory } from 'react-router-dom';


const Friend = (props) => {
    const {name,email,phone,id} = props.friend;

    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div className="friend-section">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/friend/${id}`}>
                <button>Show Detail{id}</button>
            </Link>
            <button onClick = {() => handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;