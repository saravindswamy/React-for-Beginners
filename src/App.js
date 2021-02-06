import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users] = useState([
    { name: "Aravind", message: "React for Beginners" },
    { name: "swamy", message: "This is a test message" },
    { name: "Ranga", message: "Python Export" },
    { name: "Manoj", message: "PowerBI Developer" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
