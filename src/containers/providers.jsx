"use client";

import PropTypes from "prop-types";
import React from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import queryClient from "@/helpers/query-client";

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar height="4px" color="rgb(25 103 210)" shallowRouting />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
