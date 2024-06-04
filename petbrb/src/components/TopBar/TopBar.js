"use client";
import React from "react";
import styles from "./TopBar.module.css";
import Link from "next/link";
import { signInWithGoogle } from "@/lib/auth/Helpers/signIn";
import { useAuth } from "@/lib/contexts/AuthContext";
import { handleSignOut } from "@/lib/auth/Helpers/signOut";

  const GoSignOut = React.lazy(() =>
    import("react-icons/go").then((module) => ({
      default: module.GoSignOut,
    }))
  );

const TopBar = () => {
  const { currentUser } = useAuth(); 


  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>Logo</h1>
      </div>
      <div className={styles.rightContainer}>
        <Link href="/become-a-sitter">Become a sitter</Link>

        {!currentUser ? (
          <>
            {/* <button className={styles.button}>Sign Up</button> */}
            <button
              className={styles.button}
              onClick={() => signInWithGoogle()}
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            <h1>
              Hi, <span>{currentUser.displayName}</span>
            </h1>
            <Link href='/profile'>
            <img
              src={currentUser?.photoURL}
              width={40}
              height={40}
              alt={currentUser?.photoURL || "User Profile Image"}
              className={styles.profPic}
            />
            </Link>

            <GoSignOut className={styles.signOut} onClick={handleSignOut} />
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
