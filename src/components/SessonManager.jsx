import React, { useEffect, useState } from 'react';

const generateUserId = () => {
  // Generate a random string of 16 characters
  return Math.random().toString(36).substring(2, 10) + 
         Math.random().toString(36).substring(2, 10);
};

const SessionManager = () => {
  const [userId, setUserId] = useState('');
  const [creationTime, setCreationTime] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedCreationTime = localStorage.getItem('creationTime');

    if (storedUserId && storedCreationTime) {
      setUserId(storedUserId);
      setCreationTime(storedCreationTime);
    } else {
      const newUserId = generateUserId();
      const newCreationTime = new Date().toISOString();

      localStorage.setItem('userId', newUserId);
      localStorage.setItem('creationTime', newCreationTime);

      setUserId(newUserId);
      setCreationTime(newCreationTime);
    }
  }, []);

  const handleLogout = () => {
    // Clear session data from local storage
    localStorage.removeItem('userId');
    localStorage.removeItem('creationTime');

    // Reset state
    setUserId('');
    setCreationTime('');

    // You might want to redirect the user or update app state here
    // For example: history.push('/login');
  };

  return (
    <div>
      <h2>Session Information</h2>
      {userId ? (
        <>
          <p>User ID: {userId}</p>
          <p>Session Created: {new Date(creationTime).toLocaleString()}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>No active session</p>
      )}
    </div>
  );
};

export default SessionManager;