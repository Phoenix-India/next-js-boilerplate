import PropTypes from "prop-types";
import React from "react";

import { Inter } from "next/font/google";

import Providers from "@/containers/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JavaScript Boilerplate",
  description: "Generated by FLCN-16",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <main className="flex flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
