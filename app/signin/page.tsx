"use client";
import styles from "./page.module.css";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  
  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    
    const validUser = users.find((user: {username: string, password: string}) => 
      user.username === username && user.password === password
    );

    if (validUser) {
      setUsername("");
      setPassword("");
      alert("Signed in successfully!");
      router.push("/game");
    } else {
      alert("Invalid username or password please try again.");
    }
  }
    
  
  
  return (
    <div className={styles.styleContainer}>
      <h1 className={styles.title}>Farm Game</h1>
      <p className={styles.subtitle}>Please sign in to continue.</p>
      <form onSubmit={handleSignIn} className={styles.signInForm}>
        <input type="text" 
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username" 
        className={styles.input} />
        <input type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" 
        className={styles.input} />
        <button type="submit" className={styles.button}>Sign In</button>
        <br />
        <p className={styles.text}>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
}
