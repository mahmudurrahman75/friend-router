
import React, { useState } from 'react';
import { useEffect } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])

    return (
        <div>
            <h1>friends: {friends.length}</h1>
            {
                friends.map(pd => <Friend friend = {pd}></Friend>)
            }
        </div>
    );
};

export default Home;