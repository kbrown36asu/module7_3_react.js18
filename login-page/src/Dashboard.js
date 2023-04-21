import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://your-api-url.com/login', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
}, []);

return (
    <div className="dashboard">
        {userData && (
            <div>
                <h1>Welcome, {userData.name}</h1>
                <p>Email: {userData.email}</p>
            </div>
        )}
    </div>
);
};

export default Dashboard;