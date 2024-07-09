"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./style.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [user] = useAuthState(auth);

  if (user) {
    router.push("/");
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userName = prompt("Please enter your name:");
      if (userName) {
        await updateProfile(result.user, {
          displayName: userName,
        });
      }
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <h5>
        Already have an account? <Link href="/login">Login</Link>
      </h5>
      <div className={styles.orDivider}>
        <span>or</span>
      </div>
      <button type="button" onClick={handleGoogleSignUp}>
        Sign Up with Google
      </button>
    </div>
  );
};

export default Register;
