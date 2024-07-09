"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./style.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const [user] = useAuthState(auth);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (user) {
    router.push("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isClient) return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    if (!isClient) return;
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <h5>
        Not registered? <Link href="/register">Create an account</Link>
      </h5>
      <div className={styles.orDivider}>
        <span>or</span>
      </div>
      <button type="button" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
