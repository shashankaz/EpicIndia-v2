import React from "react";
import { auth } from "@/lib/firebase";

const Logout = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
