import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendDetail = () => {
    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])

    const {name,phone,email,address,company} = friend;
    return (
        <div>
            <h3>This is friend detail component: {friendId}</h3>
            <h4>{name}</h4>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            
        </div>
    );
};

export default FriendDetail;