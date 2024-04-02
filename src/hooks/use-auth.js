"use client";

import React from "react";

import { deleteCookie } from "cookies-next";

import useAuthQuery from "@/queries/auth.query";

export default function useAuth() {
  const {
    data: user,
    isLoading,
    isSuccess: isAuthenticated,
    isError,
    refetch,
  } = useAuthQuery();

  React.useEffect(() => {
    if (isError) {
      deleteCookie("access-token");
      deleteCookie("refresh-token");
    }
  }, [isError]);

  return { isLoading, isAuthenticated, user, refetch };
}
