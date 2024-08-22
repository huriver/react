import React, { useState, useEffect } from 'react';

const UserData: React.FC<{ userId: string }> = ({ userId }) => {
    const [user, setUser] = useState<null | { name: string, email: string }>(null);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // 模拟componentDidMount
        fetchUserData();

        // 模拟componentDidMount中的计时器
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // 模拟componentWillUnmount
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        // 模拟componentDidUpdate
        fetchUserData();
    }, [userId]);

    const fetchUserData = () => {
        fetch(`https://secret.url/user/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    };

    return (
        <div>
            <h1>User Data Component</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            <p>Timer: {seconds} seconds</p>
        </div>
    );
};

export default UserData;
