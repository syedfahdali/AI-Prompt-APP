"use client";
import Nav from "@components/Nav";
import Link from "next/link";
import Image from "next/image";
import Provider from "@components/Provider";
import { children, useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";



const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav className="flex-between w-full pt-3 mb-16 ">
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                className="object-contain"
                src="assets/images/logo.svg"
                alt="Promptopia logo"
                width={30}
                height={30}
              ></Image>
            </Link>
          </Nav>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
