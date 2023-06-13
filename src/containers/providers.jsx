"use client";

import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";

import store from "@/redux";

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
