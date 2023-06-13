import PropTypes from "prop-types";
import React from "react";

import { Inter } from "next/font/google";

import Providers from "@/containers/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JavaScript Boilerplate",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
