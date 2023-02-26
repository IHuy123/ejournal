import { useSelector } from "react-redux";
// import { useState } from "react";
export function useIsLogin() {
  // const token = useSelector((state) => state.Auth.token);
  const currentUser = useSelector((state) => state.Auth.currentUser);
  const role = currentUser ? currentUser.role : "MEMBER";
  return {
    // isLogin: token && currentUser,
    isLogin: currentUser,
    admin: role,
    currentUser,
  };
}