
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmit(e){
    e.preventDefault();
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(userName == "user" && password == "password")
      setIsSubmitted(true);
    else
    {
      setIsSubmitted(false);
      setError("Invalid username or password")
    }
  }
  return (
    <div>
      <h1>Login Pagel</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ) : (
        <form onSubmit={(e)=>handleSubmit(e)}>
          {error && <p>{error}</p>}

          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /><br/>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br/>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
