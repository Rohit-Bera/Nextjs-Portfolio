import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:border-light sm:text-base 
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span className="dark:text-light ">
          {new Date().getFullYear()} &copy; All Rights Reserved{" "}
        </span>
        <div className="flex items-center dark:text-light lg:py-2">
          Build by
          <span className="text-primary text-2xl px-1 font-semibold">#</span>
          <Link
            href="/"
            className="underline underline-offset-2 dark:text-light"
          >
            Rohit Bera
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline underline-offset-2 dark:text-light"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
