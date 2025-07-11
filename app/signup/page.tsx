"use client";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (username && password) {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
      const userExists = existingUsers.find((user: {username: string, password: string}) => user.username === username);
      
      if (userExists) {
        alert("Username already exists! Please choose a different username.");
        return;
      }
      
      
      const newUser = { username, password };
      const updatedUsers = [...existingUsers, newUser];
      
      
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      
      
      setUsername("");
      setPassword("");
      
      alert("User registered successfully!");
      router.push("/signin");
    } else {
      alert("Please fill in both fields.");
    }
  }
  
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
